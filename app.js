const DATA = window.STUDY_DATA || {};
let practiceOrder = [...(DATA.mcqs || []).keys()];
let currentFlash = 0;
let mockQuestions = [];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const unique = arr => [...new Set(arr)];
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function esc(str = '') {
  return String(str).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function normalize(str = '') {
  return String(str).toLowerCase().replace(/\s+/g, ' ').trim();
}

function textOfChapter(c) {
  return normalize([
    c.title, c.tag, c.priority, c.summary,
    ...(c.mustKnow || []), ...(c.pitfalls || []),
    ...(c.concepts || []).flat()
  ].join(' '));
}

function textOfMCQ(q) {
  return normalize([q.q, q.topic, q.difficulty, q.explanation, ...(q.options || [])].join(' '));
}

function textOfShortAnswer(x) {
  return normalize([x.q, x.a || x.answer, x.topic].join(' '));
}

function textOfGlossary(g) {
  return normalize([g.term, g.definition, g.source].join(' '));
}

function diagramCategory(d) {
  const t = normalize([d.title, d.description, d.examTip].join(' '));
  if (t.includes('azure') || t.includes('production') || t.includes('microservice') || t.includes('deployment') || t.includes('cloud')) return 'azure';
  if (t.includes('lab') || t.includes('pipeline') || t.includes('endpoint') || t.includes('api call')) return 'lab';
  if (t.includes('triage') || t.includes('tumor') || t.includes('clinical') || t.includes('healthcare workflow') || t.includes('patient flow')) return 'healthcare';
  return 'core';
}

function textOfDiagram(d) {
  return normalize([d.title, d.description, d.examTip, `page ${d.page}`, diagramCategory(d)].join(' '));
}

function getCompleted() {
  try { return JSON.parse(localStorage.getItem('aihc_progress') || '{}').completed || []; }
  catch { return []; }
}

function setCompleted(id, on) {
  let completed = getCompleted();
  if (on && !completed.includes(id)) completed.push(id);
  if (!on) completed = completed.filter(x => x !== id);
  localStorage.setItem('aihc_progress', JSON.stringify({ completed }));
  updateProgress();
}

function updateProgress() {
  const completed = getCompleted();
  const total = (DATA.chapters || []).length || 1;
  const pct = Math.round((completed.length / total) * 100);
  $('#globalProgress').style.width = `${pct}%`;
  $('#progressText').textContent = `${completed.length}/${total} topics completed`;
}

function renderStudyPlan() {
  $('#studyPlan').innerHTML = (DATA.studyPlan || []).map(p => `
    <div class="time-item searchable" data-search-type="Roadmap" data-text="${esc(normalize([p.time, p.phase, ...(p.tasks || [])].join(' ')))}">
      <small>${esc(p.time)}</small>
      <h3>${esc(p.phase)}</h3>
      <ul>${(p.tasks || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderChapters(filter = 'all') {
  const tags = ['all', ...unique((DATA.chapters || []).map(c => c.tag))];
  $('#chapterFilters').innerHTML = tags.map(t => `
    <button class="filter-btn ${t === filter ? 'active' : ''}" data-tag="${esc(t)}">${esc(t === 'all' ? 'All material' : t)}</button>`).join('');

  const completed = getCompleted();
  const filtered = filter === 'all' ? (DATA.chapters || []) : (DATA.chapters || []).filter(c => c.tag === filter);
  $('#chapterGrid').innerHTML = filtered.map(c => `
    <article class="chapter-card searchable" id="topic-${esc(c.id)}" data-search-type="Study Note" data-text="${esc(textOfChapter(c))}">
      <input class="complete" type="checkbox" ${completed.includes(c.id) ? 'checked' : ''} data-complete="${esc(c.id)}" title="Mark complete">
      <div class="chapter-top"><span class="badge">${esc(c.tag)}</span><span class="priority">${esc(c.priority)}</span></div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      <div class="cols">
        <div><h4>Must know</h4><ul>${(c.mustKnow || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div><h4>Exam traps</h4><ul>${(c.pitfalls || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
      <h4>Core concepts</h4>
      <div class="concept-table">${(c.concepts || []).map(([t, d]) => `<div class="concept-row"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
    </article>`).join('');

  $$('#chapterFilters .filter-btn').forEach(b => b.addEventListener('click', () => renderChapters(b.dataset.tag)));
  $$('[data-complete]').forEach(ch => ch.addEventListener('change', e => setCompleted(e.target.dataset.complete, e.target.checked)));
}

function renderDiagramBank() {
  const term = normalize($('#diagramSearch')?.value || '');
  const range = $('#diagramRange')?.value || 'all';
  const diagrams = (DATA.diagramBank || []).filter(d => {
    const cat = diagramCategory(d);
    const inRange = range === 'all' || cat === range;
    const inTerm = !term || textOfDiagram(d).includes(term);
    return inRange && inTerm;
  });
  $('#diagramBank').innerHTML = diagrams.map((d, i) => `
    <article class="diagram-card searchable" id="diagram-${esc(d.page)}" data-search-type="Chapter 3 Diagram" data-text="${esc(textOfDiagram(d))}">
      <div class="diagram-head"><span class="badge">Page ${esc(d.page)}</span><span class="priority">${esc(diagramCategory(d))}</span></div>
      <button class="diagram-img-btn" data-img="${esc(d.image)}" data-title="${esc(d.title)}" aria-label="Open diagram ${esc(d.title)}">
        <img src="${esc(d.image)}" alt="${esc(d.title)} - page ${esc(d.page)}" loading="lazy" />
      </button>
      <h3>${esc(d.title)}</h3>
      <p>${esc(d.description)}</p>
      <div class="exam-tip"><b>Exam tip:</b> ${esc(d.examTip)}</div>
    </article>`).join('') || `<div class="empty-state">No diagrams match your filter.</div>`;
  $$('.diagram-img-btn').forEach(btn => btn.addEventListener('click', () => openDiagramModal(btn.dataset.img, btn.dataset.title)));
}


function azureText(s) {
  return normalize([s.name, s.memory, s.stage, s.role, s.howToDifferentiate, s.examTrap].join(' '));
}

function renderAzureStageFilters(active = 'all') {
  const stages = ['all', ...unique((DATA.azureServices || []).map(s => s.stage))];
  const holder = $('#azureStageFilters');
  if (!holder) return;
  holder.innerHTML = stages.map(stage => `<button class="filter-btn ${stage === active ? 'active' : ''}" data-stage="${esc(stage)}">${esc(stage === 'all' ? 'All services' : stage)}</button>`).join('');
  $$('#azureStageFilters .filter-btn').forEach(btn => btn.addEventListener('click', () => {
    renderAzureServices(btn.dataset.stage);
    searchIndex = buildSearchIndex();
  }));
}

function renderAzurePipeline() {
  const holder = $('#azurePipeline');
  if (!holder) return;
  holder.innerHTML = (DATA.azurePipelineSteps || []).map(step => `
    <article class="pipeline-step searchable" id="azure-step-${esc(step.step.replace(/[^0-9a-zA-Z]+/g,'-'))}" data-search-type="Azure Pipeline Step" data-text="${esc(normalize(Object.values(step).join(' ')))}">
      <strong>${esc(step.step)}</strong>
      <p>${esc(step.meaning)}</p>
      <small>${esc(step.services)}</small>
      <div class="exam-tip"><b>Exam line:</b> ${esc(step.examLine)}</div>
    </article>`).join('');
}

function renderAzureServices(stage = 'all') {
  renderAzureStageFilters(stage);
  const holder = $('#azureServices');
  if (!holder) return;
  const services = (DATA.azureServices || []).filter(s => stage === 'all' || s.stage === stage);
  holder.innerHTML = services.map((svc, i) => `
    <article class="azure-service-card searchable" id="azure-service-${esc(svc.name.toLowerCase().replace(/[^a-z0-9]+/g,'-'))}" data-search-type="Azure Service" data-text="${esc(azureText(svc))}">
      <div class="chapter-top"><span class="badge">${esc(svc.stage)}</span><span class="priority">${esc(svc.memory)}</span></div>
      <h3>${esc(svc.name)}</h3>
      <p>${esc(svc.role)}</p>
      <div class="service-note"><b>How to know it:</b> ${esc(svc.howToDifferentiate)}</div>
      <div class="exam-tip"><b>Trap:</b> ${esc(svc.examTrap)}</div>
    </article>`).join('');
}

function openDiagramModal(src, title) {
  let modal = $('#diagramModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'diagramModal';
    modal.className = 'diagram-modal';
    modal.innerHTML = `<div class="diagram-modal-inner"><button id="closeDiagramModal" aria-label="Close diagram">×</button><h3></h3><img alt="Expanded diagram"></div>`;
    document.body.appendChild(modal);
    $('#closeDiagramModal', modal).addEventListener('click', closeDiagramModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeDiagramModal(); });
  }
  $('h3', modal).textContent = title || 'Diagram';
  $('img', modal).src = src;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeDiagramModal() {
  const modal = $('#diagramModal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function renderTopicFilter() {
  const topics = ['all', ...unique((DATA.mcqs || []).map(q => q.topic))];
  $('#topicFilter').innerHTML = topics.map(t => `<option value="${esc(t)}">${esc(t === 'all' ? 'All topics' : t)}</option>`).join('');
}

function mcqHTML(q, id, num) {
  return `
    <article class="mcq searchable" id="mcq-${esc(id)}" data-search-type="MCQ" data-text="${esc(textOfMCQ(q))}">
      <div class="mcq-head"><span class="topic-chip">${esc(q.topic)} • ${esc(q.difficulty)}</span><span>#${num}</span></div>
      <h4>${esc(q.q)}</h4>
      <div class="options">${(q.options || []).map((o, i) => `<button class="option" data-q="${esc(id)}" data-i="${i}" data-answer="${q.answer}">${String.fromCharCode(65 + i)}. ${esc(o)}</button>`).join('')}</div>
      <div class="explanation"><b>Answer:</b> ${String.fromCharCode(65 + q.answer)} — ${esc(q.options[q.answer])}<br><b>Why:</b> ${esc(q.explanation)}</div>
    </article>`;
}

function bindMCQ(container) {
  $$(`${container} .option`).forEach(btn => btn.addEventListener('click', () => {
    const parent = btn.closest('.mcq');
    const answer = Number(btn.dataset.answer);
    parent.querySelectorAll('.option').forEach(o => {
      o.disabled = true;
      if (Number(o.dataset.i) === answer) o.classList.add('correct');
    });
    if (Number(btn.dataset.i) !== answer) btn.classList.add('wrong');
    parent.querySelector('.explanation').classList.add('show');
  }));
}

function renderMCQs() {
  const topic = $('#topicFilter').value || 'all';
  const diff = $('#difficultyFilter').value || 'all';
  const ids = practiceOrder.filter(i => (topic === 'all' || DATA.mcqs[i].topic === topic) && (diff === 'all' || DATA.mcqs[i].difficulty === diff));
  $('#practiceStats').textContent = `${ids.length} questions shown`;
  $('#mcqList').innerHTML = ids.map((idx, n) => mcqHTML(DATA.mcqs[idx], `p_${idx}`, n + 1)).join('');
  bindMCQ('#mcqList');
}

function startMock() {
  const size = clamp(Number($('#mockSize').value) || 50, 10, DATA.mcqs.length);
  $('#mockSize').value = size;
  mockQuestions = shuffle([...(DATA.mcqs || []).keys()]).slice(0, size);
  $('#mockResult').textContent = '';
  $('#submitMock').disabled = false;
  $('#mockList').innerHTML = mockQuestions.map((idx, n) => {
    const q = DATA.mcqs[idx];
    return `
      <article class="mcq">
        <div class="mcq-head"><span class="topic-chip">${esc(q.topic)}</span><span>#${n + 1}</span></div>
        <h4>${esc(q.q)}</h4>
        <div class="options">${q.options.map((o, i) => `<label class="option"><input type="radio" name="m_${n}" value="${i}"> ${String.fromCharCode(65 + i)}. ${esc(o)}</label>`).join('')}</div>
        <div class="explanation"><b>Answer:</b> ${String.fromCharCode(65 + q.answer)} — ${esc(q.options[q.answer])}<br><b>Why:</b> ${esc(q.explanation)}</div>
      </article>`;
  }).join('');
  $('#mock').scrollIntoView({ behavior: 'smooth' });
}

function submitMock() {
  if (!mockQuestions.length) return;
  let score = 0;
  mockQuestions.forEach((idx, n) => {
    const q = DATA.mcqs[idx];
    const selected = document.querySelector(`input[name="m_${n}"]:checked`);
    const parent = (selected && selected.closest('.mcq')) || document.querySelectorAll('#mockList .mcq')[n];
    parent.querySelectorAll('.option').forEach((label, i) => {
      if (i === q.answer) label.classList.add('correct');
    });
    if (selected && Number(selected.value) === q.answer) score += 1;
    else if (selected) selected.closest('.option').classList.add('wrong');
    parent.querySelector('.explanation').classList.add('show');
  });
  const pct = Math.round((score / mockQuestions.length) * 100);
  $('#mockResult').textContent = `Score: ${score}/${mockQuestions.length} (${pct}%)`;
  $('#submitMock').disabled = true;
}

function renderFlash() {
  if (!(DATA.flashcards || []).length) return;
  const c = DATA.flashcards[currentFlash];
  $('#flashCard').classList.remove('flipped');
  $('#flashCard .front').textContent = c.front;
  $('#flashCard .back').textContent = c.back;
  $('#flashMeta').textContent = `${currentFlash + 1}/${DATA.flashcards.length} • ${c.topic}`;
}

function renderShortAnswers() {
  $('#shortAnswerList').innerHTML = (DATA.shortAnswers || []).map((x, i) => `
    <div class="accordion-item searchable" id="short-${i}" data-search-type="Short Answer" data-text="${esc(textOfShortAnswer(x))}">
      <div class="accordion-q">${i + 1}. ${esc(x.q)}<span class="topic-chip"> — ${esc(x.topic)}</span></div>
      <div class="accordion-a">${esc(x.a)}</div>
    </div>`).join('');
  $$('.accordion-q').forEach(q => q.addEventListener('click', () => q.parentElement.classList.toggle('open')));
}

function renderGlossary() {
  const sorted = [...(DATA.glossary || [])].sort((a, b) => a.term.localeCompare(b.term));
  $('#glossaryList').innerHTML = sorted.map((g, i) => `
    <div class="gloss-item searchable" id="gloss-${i}" data-search-type="Glossary" data-text="${esc(textOfGlossary(g))}">
      <h4>${esc(g.term)}</h4><p>${esc(g.definition)}</p><small>${esc(g.source)}</small>
    </div>`).join('');
}

function buildSearchIndex() {
  const index = [];
  (DATA.chapters || []).forEach(c => index.push({ type: 'Study Note', title: c.title, detail: c.summary, target: `topic-${c.id}`, text: textOfChapter(c), render: () => renderChapters('all') }));
  (DATA.mcqs || []).forEach((q, i) => index.push({ type: 'MCQ', title: q.q, detail: `${q.topic} • ${q.difficulty}`, target: `mcq-p_${i}`, text: textOfMCQ(q), render: () => { $('#topicFilter').value = 'all'; $('#difficultyFilter').value = 'all'; practiceOrder = [...DATA.mcqs.keys()]; renderMCQs(); } }));
  (DATA.shortAnswers || []).forEach((x, i) => index.push({ type: 'Short Answer', title: x.q, detail: x.topic, target: `short-${i}`, text: textOfShortAnswer(x), render: renderShortAnswers }));
  (DATA.glossary || []).forEach((g, i) => index.push({ type: 'Glossary', title: g.term, detail: g.definition, target: `gloss-${i}`, text: textOfGlossary(g), render: renderGlossary }));
  (DATA.diagramBank || []).forEach(d => index.push({ type: 'Chapter 3 Diagram', title: d.title, detail: `Page ${d.page} • ${diagramCategory(d)}`, target: `diagram-${d.page}`, text: textOfDiagram(d), render: renderDiagramBank }));
  (DATA.azureServices || []).forEach(svc => index.push({ type: 'Azure Service', title: svc.name, detail: `${svc.stage} • ${svc.memory}`, target: `azure-service-${svc.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`, text: azureText(svc), render: () => renderAzureServices('all') }));
  (DATA.azurePipelineSteps || []).forEach(step => index.push({ type: 'Azure Pipeline Step', title: step.step, detail: step.services, target: `azure-step-${step.step.replace(/[^0-9a-zA-Z]+/g,'-')}`, text: normalize(Object.values(step).join(' ')), render: renderAzurePipeline }));
  $$('.searchable').forEach((el, i) => index.push({ type: el.dataset.searchType || 'Page', title: (el.querySelector('h3,h4,.accordion-q')?.textContent || `Result ${i + 1}`).trim(), detail: '', target: el.id || '', text: el.dataset.text || '' }));
  return index;
}

let searchIndex = [];
function showSearchResults(term) {
  const box = $('#searchResults');
  const clear = $('#clearSearch');
  if (!term) {
    $$('.searchable').forEach(el => el.classList.remove('hidden-by-search'));
    box.classList.remove('open');
    box.innerHTML = '';
    clear.classList.remove('visible');
    return;
  }
  clear.classList.add('visible');
  const matches = searchIndex.filter(item => item.text.includes(term)).slice(0, 12);
  box.classList.add('open');
  box.innerHTML = matches.length ? matches.map((m, i) => `
    <button class="search-result" data-target="${esc(m.target)}" data-index="${i}">
      <b>${esc(m.type)}</b><span>${esc(m.title)}</span><small>${esc(m.detail || '')}</small>
    </button>`).join('') : `<div class="no-results">No matches found. Try: EHR, agent, CNN, supervised, DNA, privacy.</div>`;

  const resultButtons = $$('.search-result', box);
  resultButtons.forEach((btn, i) => btn.addEventListener('click', () => {
    const match = matches[i];
    if (match.render) match.render();
    requestAnimationFrame(() => {
      const target = match.target ? document.getElementById(match.target) : null;
      if (target) {
        target.classList.remove('hidden-by-search');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('focus-ring');
        setTimeout(() => target.classList.remove('focus-ring'), 1400);
      }
      box.classList.remove('open');
    });
  }));

  // Filter only the currently rendered searchable cards. The dropdown covers global search.
  $$('.searchable').forEach(el => el.classList.toggle('hidden-by-search', !normalize(el.dataset.text).includes(term)));
}

function searchAll() {
  const term = normalize($('#searchInput').value);
  showSearchResults(term);
}

function openSidebar() {
  $('#sidebar').classList.add('open');
  $('#backdrop').classList.add('show');
  document.body.classList.add('menu-open');
  $('#hamb').setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#backdrop').classList.remove('show');
  document.body.classList.remove('menu-open');
  $('#hamb').setAttribute('aria-expanded', 'false');
}

function toggleSidebar() {
  $('#sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
}

function navSpy() {
  const fromTop = window.scrollY + 120;
  $$('.sidebar nav a').forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (sec && sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      $$('.sidebar nav a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    }
  });
}

function init() {
  document.body.classList.toggle('light', localStorage.getItem('theme') === 'light');
  $('#mcqCount').textContent = (DATA.mcqs || []).length;
  $('#flashCount').textContent = (DATA.flashcards || []).length;

  renderStudyPlan();
  renderChapters();
  renderDiagramBank();
  renderAzurePipeline();
  renderAzureServices();
  renderTopicFilter();
  renderMCQs();
  renderFlash();
  renderShortAnswers();
  renderGlossary();
  updateProgress();
  searchIndex = buildSearchIndex();

  $('#diagramSearch').addEventListener('input', () => { renderDiagramBank(); searchIndex = buildSearchIndex(); });
  $('#diagramRange').addEventListener('change', () => { renderDiagramBank(); searchIndex = buildSearchIndex(); });

  $('#topicFilter').addEventListener('change', renderMCQs);
  $('#difficultyFilter').addEventListener('change', renderMCQs);
  $('#shufflePractice').addEventListener('click', () => { practiceOrder = shuffle(practiceOrder); renderMCQs(); searchIndex = buildSearchIndex(); });
  $('#resetPractice').addEventListener('click', () => { practiceOrder = [...DATA.mcqs.keys()]; $('#topicFilter').value = 'all'; $('#difficultyFilter').value = 'all'; renderMCQs(); searchIndex = buildSearchIndex(); });
  $('#startMock').addEventListener('click', startMock);
  $('#submitMock').addEventListener('click', submitMock);

  $('#flashCard').addEventListener('click', () => $('#flashCard').classList.toggle('flipped'));
  $('#flipFlash').addEventListener('click', () => $('#flashCard').classList.toggle('flipped'));
  $('#nextFlash').addEventListener('click', () => { currentFlash = (currentFlash + 1) % DATA.flashcards.length; renderFlash(); });
  $('#prevFlash').addEventListener('click', () => { currentFlash = (currentFlash - 1 + DATA.flashcards.length) % DATA.flashcards.length; renderFlash(); });

  $('#searchInput').addEventListener('input', searchAll);
  $('#searchInput').addEventListener('focus', searchAll);
  $('#clearSearch').addEventListener('click', () => { $('#searchInput').value = ''; searchAll(); $('#searchInput').focus(); });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) $('#searchResults').classList.remove('open'); });

  $('#themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
  $('#printBtn').addEventListener('click', () => window.print());

  $('#hamb').addEventListener('click', toggleSidebar);
  $('#sidebarClose').addEventListener('click', closeSidebar);
  $('#backdrop').addEventListener('click', closeSidebar);
  $$('.sidebar nav a').forEach(a => a.addEventListener('click', closeSidebar));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSidebar(); closeDiagramModal(); $('#searchResults').classList.remove('open'); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 980) closeSidebar(); });
  window.addEventListener('scroll', navSpy, { passive: true });
  navSpy();
}

document.addEventListener('DOMContentLoaded', init);
