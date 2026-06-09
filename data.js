window.STUDY_DATA = {
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — Introduction to Healthcare",
      "tag": "Core Chapter",
      "priority": "High",
      "summary": "Understand the healthcare system before applying AI: actors, risk, payment, levels of care, quality, and ethical implications.",
      "mustKnow": [
        "Patient–provider interaction is the basic unit of healthcare.",
        "Intermediaries such as insurers or government payers pool financial risk and pay providers.",
        "Risk pooling spreads unpredictable healthcare costs across a group.",
        "Providers include medical professionals and organizations such as hospitals, practices, labs, pharmacies, and imaging centers.",
        "Levels of care: primary, secondary, tertiary, quaternary.",
        "Quality dimensions: safe, effective, patient-centered, timely, efficient, equitable.",
        "AI applications include diagnosis, robotic surgery, drug discovery, treatment selection, and administration.",
        "Ethical concerns include patient harm, fairness/social justice, privacy, security, interpretation, and incentives."
      ],
      "concepts": [
        [
          "Patients",
          "People who need treatment, prevention, health information, or support for someone they care about."
        ],
        [
          "Providers",
          "Doctors, nurses, pharmacists, labs, hospitals, imaging centers, pharmaceutical/device companies, and other care-related organizations."
        ],
        [
          "Intermediaries",
          "Entities that collect funds, pool risk, and pay for healthcare, such as private insurers, payers, health plans, and government programs."
        ],
        [
          "Risk",
          "The possibility of large financial loss due to healthcare needs."
        ],
        [
          "Risk pooling",
          "Sharing risk among many people so the group can absorb healthcare costs better than one individual."
        ],
        [
          "Primary care",
          "First point of entry, usually common conditions and prevention."
        ],
        [
          "Secondary care",
          "Specialist care, often after referral."
        ],
        [
          "Tertiary care",
          "Highly specialized care, often in referral centers."
        ],
        [
          "Quaternary care",
          "Most specialized care for rare and very complex conditions."
        ],
        [
          "Underuse",
          "Needed care is not provided enough."
        ],
        [
          "Overuse",
          "Care is provided when it adds little/no value or may cause harm."
        ],
        [
          "Misuse",
          "Errors or wrong use of treatment/services."
        ]
      ],
      "pitfalls": [
        "Do not confuse provider with intermediary: provider gives care; intermediary pays/pools risk.",
        "Do not say AI ethics is only privacy; it also includes fairness, harm, incentives, and interpretation.",
        "Do not confuse access challenges with quality challenges."
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Healthcare Data",
      "tag": "Core Chapter",
      "priority": "Very High",
      "summary": "Healthcare AI depends on data quality, data source, timeline, structure, bias, feature engineering, and privacy.",
      "mustKnow": [
        "Clinical data mining workflow: pose question → identify data sources → extract/transform → analyze.",
        "Structured data is organized in rows/columns.",
        "Unstructured data includes clinical notes, images, and signals.",
        "Observational data is collected as a byproduct of care and used secondarily for analysis.",
        "Healthcare data has time ordering; patient timelines matter.",
        "Bias can arise from patient decisions, clinical care gaps, provider incentives, and coding/billing practices.",
        "Patient-feature matrix: one patient per row, features/measurements as columns.",
        "Feature engineering can use metadata and prior knowledge.",
        "Missing data and sensitive data require careful handling."
      ],
      "concepts": [
        [
          "Clinical data mining",
          "Using clinical data to answer research questions that can improve patient health."
        ],
        [
          "EMR/EHR",
          "Electronic record of patient care; useful but incomplete and shaped by care delivery."
        ],
        [
          "Structured data",
          "Consistent table-like data such as diagnosis codes, lab values, medications."
        ],
        [
          "Unstructured data",
          "Free text, images, signals, and other data not naturally stored as fixed tables."
        ],
        [
          "Clinical text",
          "Medical notes full of abbreviations, acronyms, and context-specific language."
        ],
        [
          "Medical images",
          "2D or 3D intensity arrays from X-rays, CT, MRI, etc."
        ],
        [
          "Signals",
          "Sensor measurements over time, such as ECG or vital sign monitoring."
        ],
        [
          "Observational data",
          "Data collected during care delivery, not originally for research."
        ],
        [
          "Metadata",
          "Data about data, such as test orders or timestamps; can be informative."
        ],
        [
          "Patient-feature matrix",
          "Analysis-ready table where rows are patients and columns are features."
        ],
        [
          "Feature engineering",
          "Creating useful input variables using data, metadata, and domain knowledge."
        ],
        [
          "Bias/error sources",
          "Patient care-seeking behavior, provider incentives, documentation gaps, coding choices, and missingness."
        ]
      ],
      "pitfalls": [
        "Do not assume EHR data represents all people; it mostly represents people who interacted with the system.",
        "Do not treat missing values as random automatically.",
        "Do not ignore time order: future information must not be used to predict the past."
      ]
    },
    {
      "id": "ch3",
      "title": "Chapter 3 — Agentic AI in Healthcare",
      "tag": "Core Chapter",
      "priority": "Very High",
      "summary": "Agentic AI moves beyond text generation into tool use, planning, memory, orchestration, safety, and workflow execution.",
      "mustKnow": [
        "LLM = text generation/reasoning.",
        "RAG = LLM + retrieval.",
        "Agent = LLM + tools + planning.",
        "System = full workflow execution.",
        "Core components: orchestrator, LLM, memory, tools, safety layer.",
        "Orchestrator controls workflow, breaks tasks into steps, and routes actions.",
        "Tools allow real-world action such as APIs, EHR systems, databases, calculators, and ML models.",
        "Safety layer is critical in healthcare to prevent hallucinations, unsafe recommendations, privacy violations, and unsupported decisions.",
        "Typical loop: observe → think → plan → act → reflect → repeat.",
        "Human-in-the-loop is important when decisions may affect patient care."
      ],
      "concepts": [
        [
          "LLM",
          "Reasoning and natural-language generation engine, but not enough alone for safe healthcare workflow execution."
        ],
        [
          "RAG",
          "Retrieval-augmented generation: the model retrieves relevant information before answering."
        ],
        [
          "Agent",
          "A system that can plan, use tools, use memory, and execute steps toward a goal."
        ],
        [
          "Orchestrator",
          "Brain/controller that manages steps, workflow order, and component routing."
        ],
        [
          "Memory",
          "Stores session context, user preferences, intermediate results, or persistent knowledge."
        ],
        [
          "Tools",
          "APIs, EHR access, databases, calculators, ML models, search, and code execution."
        ],
        [
          "Safety layer",
          "Validation, ethical constraints, privacy protection, and human review."
        ],
        [
          "MCP",
          "A protocol/interface concept for connecting agents with tools or external systems."
        ],
        [
          "Human-in-the-loop",
          "Human oversight for validation and final decision-making, especially in clinical contexts."
        ]
      ],
      "pitfalls": [
        "Do not say the LLM is fully autonomous; it works under orchestration and constraints.",
        "Do not confuse RAG with agentic AI: RAG retrieves; agents plan and use tools.",
        "Never present agent output as a final medical decision without safety and human review."
      ]
    },
    {
      "id": "ohsc1",
      "title": "OHSC Module 1 — Introduction to AI in Health Care",
      "tag": "Micro-credential",
      "priority": "High",
      "summary": "Core AI definitions, healthcare applications, history, and ethics.",
      "mustKnow": [
        "AI simulates human intelligence in machines: learning, reasoning, problem-solving, and decision-making.",
        "ML learns from data and improves without explicit programming.",
        "NLP understands, interprets, and generates human language.",
        "Deep learning uses multi-layer neural networks for complex data.",
        "ANNs are pattern-recognition models inspired by the brain.",
        "AI applications: diagnosis, treatment planning, administration, medical imaging, predictive analytics, drug discovery, personalized medicine, virtual assistants.",
        "Ethics: privacy, data security, transparency, fairness, and accountability."
      ],
      "concepts": [
        [
          "Artificial Intelligence",
          "Systems designed to perform tasks requiring human cognition."
        ],
        [
          "Machine Learning",
          "AI subset that learns patterns from data."
        ],
        [
          "Natural Language Processing",
          "AI technique for clinical notes, transcription, and extracting information from text."
        ],
        [
          "Deep Learning",
          "ML branch using neural networks with multiple layers."
        ],
        [
          "Artificial Neural Network",
          "Algorithms inspired by brain-like connections used for pattern recognition."
        ],
        [
          "Medical imaging AI",
          "AI tools that interpret X-rays, CT, MRI, and other scans."
        ],
        [
          "Predictive analytics",
          "Using historical data to predict future risks or outcomes."
        ],
        [
          "Personalized medicine",
          "Tailoring treatment using patient-specific information such as genetics, history, and lifestyle."
        ]
      ],
      "pitfalls": [
        "Do not use AI, ML, and deep learning as identical terms. Deep learning is part of ML, and ML is part of AI."
      ]
    },
    {
      "id": "ohsc2",
      "title": "OHSC Module 2 — Data in Health Care and AI",
      "tag": "Micro-credential",
      "priority": "Very High",
      "summary": "Healthcare data types, EHRs, imaging, genomics, wearable data, data quality, preprocessing, and big data.",
      "mustKnow": [
        "EHRs store demographics, diagnoses, treatments, medications, lab results, immunizations, and patient history.",
        "Medical imaging includes X-rays, MRIs, CT scans, ultrasounds.",
        "Genomic data comes from DNA and supports disease-risk prediction and personalized treatment.",
        "Wearables provide continuous data such as heart rate, sleep, and activity.",
        "High-quality data needs standardization, validation, accurate collection, cleaning, and consistency.",
        "Preprocessing includes cleaning, handling missing values, normalization, encoding, and integration.",
        "Big data matters because AI often requires large, diverse, high-quality datasets."
      ],
      "concepts": [
        [
          "EHR",
          "Longitudinal digital patient record used for care and AI decision support."
        ],
        [
          "Genomic data",
          "DNA-based information about genetic variation, disease predisposition, and treatment response."
        ],
        [
          "Medical imaging data",
          "Visual scans used for diagnosis; often analyzed by deep learning."
        ],
        [
          "Wearable data",
          "Continuous patient-generated data from devices and sensors."
        ],
        [
          "Standardization",
          "Recording data in consistent formats across systems."
        ],
        [
          "Data validation",
          "Checking that data is complete, plausible, and correct."
        ],
        [
          "Data cleaning",
          "Correcting errors, duplicates, inconsistent values, and missingness."
        ],
        [
          "Big data",
          "Large, varied, fast-growing datasets that enable AI but create storage, quality, and privacy challenges."
        ]
      ],
      "pitfalls": [
        "Do not assume more data always means better AI; bad-quality data can lead to bad predictions."
      ]
    },
    {
      "id": "ohsc3",
      "title": "OHSC Module 3 — Machine Learning for Health Care",
      "tag": "Micro-credential",
      "priority": "High",
      "summary": "Supervised, unsupervised, and reinforcement learning for diagnostics, prediction, and dynamic treatment planning.",
      "mustKnow": [
        "Supervised learning uses labelled data for prediction or classification.",
        "Unsupervised learning uses unlabelled data to discover hidden patterns or clusters.",
        "Reinforcement learning uses an agent, environment, actions, rewards, and penalties to learn decisions over time.",
        "Diagnostics applications include disease classification, image analysis, and early detection.",
        "Predictive healthcare estimates risk or future outcomes.",
        "RL supports dynamic treatment planning by adapting recommendations as patient condition changes.",
        "ML can support prognosis, triage, recovery prediction, and treatment response prediction."
      ],
      "concepts": [
        [
          "Supervised learning",
          "Learns from inputs paired with known outcomes/labels."
        ],
        [
          "Unsupervised learning",
          "Finds hidden structure without labelled outcomes."
        ],
        [
          "Reinforcement learning",
          "Learns decision policies through feedback from rewards and penalties."
        ],
        [
          "Classification",
          "Predicting a category such as disease/no disease."
        ],
        [
          "Regression",
          "Predicting a continuous value such as risk score or length of stay."
        ],
        [
          "Clustering",
          "Grouping similar patients or disease subtypes."
        ],
        [
          "Dynamic treatment planning",
          "Adjusting treatment over time based on patient response."
        ],
        [
          "Prognosis",
          "Predicting likely course or outcome of disease."
        ]
      ],
      "pitfalls": [
        "Do not say reinforcement learning needs labelled training examples like supervised learning; it learns from feedback."
      ]
    },
    {
      "id": "ohsc4",
      "title": "OHSC Module 4 — Deep Learning & Neural Networks",
      "tag": "Micro-credential",
      "priority": "High",
      "summary": "Neural network basics, CNNs, RNNs, medical imaging, radiology, pathology, genomics, and ethical issues in AI-driven diagnosis.",
      "mustKnow": [
        "Neural networks include input, hidden, and output layers.",
        "Hidden layers learn features and transformations from data.",
        "CNNs are especially effective for image processing.",
        "Convolutional layers detect local patterns such as edges, textures, and shapes.",
        "Pooling reduces dimensions while preserving important features.",
        "Fully connected layers combine features for prediction/classification.",
        "CNNs are used in radiology to detect anomalies in X-rays, MRIs, CT scans.",
        "Deep learning supports radiology, pathology, and genomics.",
        "Ethical challenges include bias, false positives/negatives, explainability, privacy, and clinician oversight."
      ],
      "concepts": [
        [
          "Neural network",
          "A model made of connected layers that learns patterns from data."
        ],
        [
          "Input layer",
          "Receives the input data such as pixels or encoded features."
        ],
        [
          "Hidden layers",
          "Perform computations and learn features."
        ],
        [
          "Output layer",
          "Produces final prediction or class."
        ],
        [
          "CNN",
          "Convolutional Neural Network, specialized for image data."
        ],
        [
          "Convolutional layer",
          "Applies filters to detect local image features."
        ],
        [
          "Pooling layer",
          "Reduces image dimensions and computational complexity."
        ],
        [
          "RNN",
          "Recurrent neural network useful for sequences/time-dependent data."
        ],
        [
          "FCN",
          "Fully connected network/layer used to combine learned features."
        ]
      ],
      "pitfalls": [
        "Do not say CNNs only memorize images; they learn filters/features that generalize to new images."
      ]
    },
    {
      "id": "proj1",
      "title": "Project 1 — DNA Sequence Classification with Deep Learning",
      "tag": "Project",
      "priority": "High",
      "summary": "A deep learning project for classifying DNA sequences using sequence preprocessing, encoding, model training, evaluation, and prediction.",
      "mustKnow": [
        "Goal: classify DNA sequences using a deep learning approach.",
        "DNA sequence classification is a sequence classification problem.",
        "DNA bases are commonly A, C, G, T.",
        "Preprocessing may include cleaning sequences, removing invalid characters, padding/truncation, and encoding.",
        "Encoding can be one-hot, integer/token based, k-mer based, or embedding-based.",
        "Possible models include CNN, RNN, LSTM, GRU, BiLSTM, and hybrid CNN-RNN models.",
        "Evaluation can use accuracy, precision, recall, F1-score, confusion matrix, loss, and validation performance.",
        "A short report should include abstract, introduction, method, experiment, results, discussion, conclusion, and references."
      ],
      "concepts": [
        [
          "DNA sequence classification",
          "Assigning a category/class to DNA sequences."
        ],
        [
          "CNN for DNA",
          "Detects local motif-like patterns in sequences."
        ],
        [
          "LSTM/BiLSTM",
          "Captures sequential dependencies in DNA sequences."
        ],
        [
          "Hybrid model",
          "Combines strengths, such as CNN local pattern extraction plus BiLSTM sequence context."
        ],
        [
          "Encoding",
          "Converting biological sequence characters into numerical input for a model."
        ],
        [
          "Confidence score",
          "Model-estimated probability or certainty for predicted class."
        ]
      ],
      "pitfalls": [
        "Do not feed raw letters directly to a neural network without encoding.",
        "Do not evaluate only training accuracy; validation/test performance matters."
      ]
    },
    {
      "id": "proj2",
      "title": "Project 2 — Simple Agentic AI Extension",
      "tag": "Project",
      "priority": "Very High",
      "summary": "A simple agentic layer was added on top of the DNA classifier. The agent calls the model tool, applies a confidence rule, and uses an LLM only to format the final response.",
      "mustKnow": [
        "The trained CNN-BiLSTM model remains responsible for classification.",
        "The tool/function is predict_dna(sequence).",
        "The agent receives a DNA sequence and calls predict_dna(sequence).",
        "The model returns predicted class and confidence score.",
        "Confidence rule: confidence < 70% → Low Confidence; otherwise → Accepted.",
        "Qwen/Qwen2.5-0.5B-Instruct was used locally through Hugging Face Transformers to format the final response.",
        "The LLM does not classify the DNA sequence.",
        "This project is a simple example of agent + tool + rule + formatted response."
      ],
      "concepts": [
        [
          "predict_dna(sequence)",
          "Tool used by the agent to call the trained classifier."
        ],
        [
          "Agentic AI layer",
          "Adds workflow control around a model tool."
        ],
        [
          "Confidence rule",
          "Simple safety/decision rule for accepting or flagging predictions."
        ],
        [
          "Low Confidence",
          "Label used when model confidence is below 70%."
        ],
        [
          "Accepted",
          "Label used when confidence is 70% or higher."
        ],
        [
          "LLM formatting",
          "LLM turns model output into a human-readable response without doing the classification."
        ]
      ],
      "pitfalls": [
        "Most likely exam trap: The LLM does NOT classify DNA. The trained CNN-BiLSTM model does.",
        "Do not confuse the confidence rule with training; it is applied after prediction."
      ]
    }
  ],
  "glossary": [
    {
      "term": "Patients",
      "definition": "People who need treatment, prevention, health information, or support for someone they care about.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Providers",
      "definition": "Doctors, nurses, pharmacists, labs, hospitals, imaging centers, pharmaceutical/device companies, and other care-related organizations.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Intermediaries",
      "definition": "Entities that collect funds, pool risk, and pay for healthcare, such as private insurers, payers, health plans, and government programs.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Risk",
      "definition": "The possibility of large financial loss due to healthcare needs.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Risk pooling",
      "definition": "Sharing risk among many people so the group can absorb healthcare costs better than one individual.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Primary care",
      "definition": "First point of entry, usually common conditions and prevention.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Secondary care",
      "definition": "Specialist care, often after referral.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Tertiary care",
      "definition": "Highly specialized care, often in referral centers.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Quaternary care",
      "definition": "Most specialized care for rare and very complex conditions.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Underuse",
      "definition": "Needed care is not provided enough.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Overuse",
      "definition": "Care is provided when it adds little/no value or may cause harm.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Misuse",
      "definition": "Errors or wrong use of treatment/services.",
      "source": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "term": "Clinical data mining",
      "definition": "Using clinical data to answer research questions that can improve patient health.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "EMR/EHR",
      "definition": "Electronic record of patient care; useful but incomplete and shaped by care delivery.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Structured data",
      "definition": "Consistent table-like data such as diagnosis codes, lab values, medications.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Unstructured data",
      "definition": "Free text, images, signals, and other data not naturally stored as fixed tables.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Clinical text",
      "definition": "Medical notes full of abbreviations, acronyms, and context-specific language.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Medical images",
      "definition": "2D or 3D intensity arrays from X-rays, CT, MRI, etc.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Signals",
      "definition": "Sensor measurements over time, such as ECG or vital sign monitoring.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Observational data",
      "definition": "Data collected during care delivery, not originally for research.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Metadata",
      "definition": "Data about data, such as test orders or timestamps; can be informative.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Patient-feature matrix",
      "definition": "Analysis-ready table where rows are patients and columns are features.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Feature engineering",
      "definition": "Creating useful input variables using data, metadata, and domain knowledge.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "Bias/error sources",
      "definition": "Patient care-seeking behavior, provider incentives, documentation gaps, coding choices, and missingness.",
      "source": "Chapter 2 — Healthcare Data"
    },
    {
      "term": "LLM",
      "definition": "Reasoning and natural-language generation engine, but not enough alone for safe healthcare workflow execution.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "RAG",
      "definition": "Retrieval-augmented generation: the model retrieves relevant information before answering.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Agent",
      "definition": "A system that can plan, use tools, use memory, and execute steps toward a goal.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Orchestrator",
      "definition": "Brain/controller that manages steps, workflow order, and component routing.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Memory",
      "definition": "Stores session context, user preferences, intermediate results, or persistent knowledge.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Tools",
      "definition": "APIs, EHR access, databases, calculators, ML models, search, and code execution.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Safety layer",
      "definition": "Validation, ethical constraints, privacy protection, and human review.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "MCP",
      "definition": "A protocol/interface concept for connecting agents with tools or external systems.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Human-in-the-loop",
      "definition": "Human oversight for validation and final decision-making, especially in clinical contexts.",
      "source": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "term": "Artificial Intelligence",
      "definition": "Systems designed to perform tasks requiring human cognition.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Machine Learning",
      "definition": "AI subset that learns patterns from data.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Natural Language Processing",
      "definition": "AI technique for clinical notes, transcription, and extracting information from text.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Deep Learning",
      "definition": "ML branch using neural networks with multiple layers.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Artificial Neural Network",
      "definition": "Algorithms inspired by brain-like connections used for pattern recognition.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Medical imaging AI",
      "definition": "AI tools that interpret X-rays, CT, MRI, and other scans.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Predictive analytics",
      "definition": "Using historical data to predict future risks or outcomes.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "Personalized medicine",
      "definition": "Tailoring treatment using patient-specific information such as genetics, history, and lifestyle.",
      "source": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "term": "EHR",
      "definition": "Longitudinal digital patient record used for care and AI decision support.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Genomic data",
      "definition": "DNA-based information about genetic variation, disease predisposition, and treatment response.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Medical imaging data",
      "definition": "Visual scans used for diagnosis; often analyzed by deep learning.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Wearable data",
      "definition": "Continuous patient-generated data from devices and sensors.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Standardization",
      "definition": "Recording data in consistent formats across systems.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Data validation",
      "definition": "Checking that data is complete, plausible, and correct.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Data cleaning",
      "definition": "Correcting errors, duplicates, inconsistent values, and missingness.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Big data",
      "definition": "Large, varied, fast-growing datasets that enable AI but create storage, quality, and privacy challenges.",
      "source": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "term": "Supervised learning",
      "definition": "Learns from inputs paired with known outcomes/labels.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Unsupervised learning",
      "definition": "Finds hidden structure without labelled outcomes.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Reinforcement learning",
      "definition": "Learns decision policies through feedback from rewards and penalties.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Classification",
      "definition": "Predicting a category such as disease/no disease.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Regression",
      "definition": "Predicting a continuous value such as risk score or length of stay.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Clustering",
      "definition": "Grouping similar patients or disease subtypes.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Dynamic treatment planning",
      "definition": "Adjusting treatment over time based on patient response.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Prognosis",
      "definition": "Predicting likely course or outcome of disease.",
      "source": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "term": "Neural network",
      "definition": "A model made of connected layers that learns patterns from data.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "Input layer",
      "definition": "Receives the input data such as pixels or encoded features.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "Hidden layers",
      "definition": "Perform computations and learn features.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "Output layer",
      "definition": "Produces final prediction or class.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "CNN",
      "definition": "Convolutional Neural Network, specialized for image data.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "Convolutional layer",
      "definition": "Applies filters to detect local image features.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "Pooling layer",
      "definition": "Reduces image dimensions and computational complexity.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "RNN",
      "definition": "Recurrent neural network useful for sequences/time-dependent data.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "FCN",
      "definition": "Fully connected network/layer used to combine learned features.",
      "source": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "term": "DNA sequence classification",
      "definition": "Assigning a category/class to DNA sequences.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "CNN for DNA",
      "definition": "Detects local motif-like patterns in sequences.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "LSTM/BiLSTM",
      "definition": "Captures sequential dependencies in DNA sequences.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "Hybrid model",
      "definition": "Combines strengths, such as CNN local pattern extraction plus BiLSTM sequence context.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "Encoding",
      "definition": "Converting biological sequence characters into numerical input for a model.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "Confidence score",
      "definition": "Model-estimated probability or certainty for predicted class.",
      "source": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "term": "predict_dna(sequence)",
      "definition": "Tool used by the agent to call the trained classifier.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "Agentic AI layer",
      "definition": "Adds workflow control around a model tool.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "Confidence rule",
      "definition": "Simple safety/decision rule for accepting or flagging predictions.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "Low Confidence",
      "definition": "Label used when model confidence is below 70%.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "Accepted",
      "definition": "Label used when confidence is 70% or higher.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "LLM formatting",
      "definition": "LLM turns model output into a human-readable response without doing the classification.",
      "source": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "term": "EHR vs EMR",
      "definition": "EMR often refers to records within one organization; EHR is often broader/longitudinal across care settings.",
      "source": "Cross-cutting"
    },
    {
      "term": "Hallucination",
      "definition": "An AI output that sounds plausible but is unsupported or false.",
      "source": "Cross-cutting"
    },
    {
      "term": "False positive",
      "definition": "Model says condition is present when it is not.",
      "source": "Cross-cutting"
    },
    {
      "term": "False negative",
      "definition": "Model misses a condition that is actually present.",
      "source": "Cross-cutting"
    },
    {
      "term": "Explainability",
      "definition": "Ability to understand why an AI system produced a decision or prediction.",
      "source": "Cross-cutting"
    },
    {
      "term": "PHI",
      "definition": "Protected health information; must be handled securely and privately.",
      "source": "Cross-cutting"
    },
    {
      "term": "Bias",
      "definition": "Systematic error or unfairness caused by data, model design, collection process, or deployment context.",
      "source": "Cross-cutting"
    },
    {
      "term": "Generalization",
      "definition": "Model performance on new unseen data.",
      "source": "Cross-cutting"
    },
    {
      "term": "Overfitting",
      "definition": "Model performs well on training data but poorly on new data.",
      "source": "Cross-cutting"
    },
    {
      "term": "Validation set",
      "definition": "Data used to tune or monitor model performance during development.",
      "source": "Cross-cutting"
    },
    {
      "term": "Test set",
      "definition": "Unseen data used for final evaluation.",
      "source": "Cross-cutting"
    },
    {
      "term": "Azure Event Hubs",
      "definition": "Azure service for high-volume real-time event streaming ingestion."
    },
    {
      "term": "Azure IoT Hub",
      "definition": "Azure service for connecting and managing IoT devices such as sensors or wearables."
    },
    {
      "term": "Azure Data Lake",
      "definition": "Storage layer for large raw healthcare datasets."
    },
    {
      "term": "Azure Machine Learning",
      "definition": "Azure service for training, managing, deploying, and monitoring ML models."
    },
    {
      "term": "Power BI",
      "definition": "Microsoft dashboard and visualization tool used to consume analytics/model outputs."
    },
    {
      "term": "Microsoft Entra ID",
      "definition": "Identity and access-management service for authentication and permissions."
    },
    {
      "term": "Azure Key Vault",
      "definition": "Secure storage for secrets, keys, certificates, and credentials."
    },
    {
      "term": "AKS",
      "definition": "Azure Kubernetes Service; used to run containerized services at scale."
    }
  ],
  "mcqs": [
    {
      "q": "What is the basic interaction at the heart of a healthcare system?",
      "options": [
        "Patient and provider",
        "Provider and pharmaceutical company",
        "Government and pharmacy",
        "AI system and hospital"
      ],
      "answer": 0,
      "explanation": "Healthcare begins with patients seeking care/information and providers delivering services.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Which actor mainly pools financial risk and pays for healthcare services?",
      "options": [
        "Patient",
        "Intermediary / insurer",
        "Radiologist",
        "Lab technician"
      ],
      "answer": 1,
      "explanation": "Intermediaries collect funds, pool risk, and pay providers.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Risk pooling means:",
      "options": [
        "Removing all disease risk",
        "Sharing healthcare financial risk among a group",
        "Charging each patient the same diagnosis",
        "Using AI to predict disease"
      ],
      "answer": 1,
      "explanation": "Pooling spreads unpredictable costs across many people.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "A hospital is best classified as a:",
      "options": [
        "Patient",
        "Provider organization",
        "Disease code",
        "Genomic data type"
      ],
      "answer": 1,
      "explanation": "Hospitals are provider organizations that deliver care.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Primary care is usually:",
      "options": [
        "The most specialized care for rare conditions",
        "The first point of entry for common problems",
        "Only intensive care",
        "Only robotic surgery"
      ],
      "answer": 1,
      "explanation": "Primary care is typically the first contact in healthcare.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Quaternary care refers to:",
      "options": [
        "Basic preventive care",
        "Specialist outpatient referral",
        "Most specialized care for rare and complex conditions",
        "Insurance payment processing"
      ],
      "answer": 2,
      "explanation": "Quaternary care is the highest level for rare/complex conditions.",
      "topic": "Chapter 1",
      "difficulty": "medium"
    },
    {
      "q": "Which set lists the six quality dimensions?",
      "options": [
        "Fast, cheap, private, automated, robotic, digital",
        "Safe, effective, patient-centered, timely, efficient, equitable",
        "Accurate, labelled, supervised, cleaned, normalized, encoded",
        "Observe, think, plan, act, reflect, repeat"
      ],
      "answer": 1,
      "explanation": "These are the common quality dimensions emphasized in Chapter 1.",
      "topic": "Chapter 1",
      "difficulty": "medium"
    },
    {
      "q": "Underuse in healthcare means:",
      "options": [
        "Too many unnecessary services",
        "Needed care is not received enough",
        "Incorrect treatment is given",
        "Data is duplicated"
      ],
      "answer": 1,
      "explanation": "Underuse occurs when appropriate care is missing or insufficient.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Overuse in healthcare means:",
      "options": [
        "Services that do not create value or may harm",
        "Using the wrong diagnosis code by mistake",
        "A patient cannot access care",
        "Too little data is available"
      ],
      "answer": 0,
      "explanation": "Overuse is unnecessary or low-value care.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Misuse refers to:",
      "options": [
        "Sharing risk among many members",
        "Making errors or using treatment incorrectly",
        "Deep learning for images",
        "Unlabelled clustering"
      ],
      "answer": 1,
      "explanation": "Misuse is incorrect use or error in care delivery.",
      "topic": "Chapter 1",
      "difficulty": "medium"
    },
    {
      "q": "Which is an ethical issue in AI healthcare?",
      "options": [
        "Privacy and security of health data",
        "Only GPU availability",
        "Only website design",
        "Only file size"
      ],
      "answer": 0,
      "explanation": "Health data is sensitive and AI raises privacy/security concerns.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Why do incentives matter in healthcare AI?",
      "options": [
        "They can shape provider behavior and data patterns",
        "They remove the need for validation",
        "They make all models unbiased",
        "They replace patients"
      ],
      "answer": 0,
      "explanation": "Payment and institutional incentives affect care and thus data and decisions.",
      "topic": "Chapter 1",
      "difficulty": "medium"
    },
    {
      "q": "A patient-centered system focuses on:",
      "options": [
        "Only hospital revenue",
        "The patient’s needs, values, and experience",
        "Only coding claims",
        "Only model accuracy"
      ],
      "answer": 1,
      "explanation": "Patient-centered care respects patient needs and context.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Access challenges can include:",
      "options": [
        "Language barriers and lack of providers",
        "Too many hidden layers",
        "Convolution filters",
        "Output formatting"
      ],
      "answer": 0,
      "explanation": "Access barriers include coverage, socioeconomic, language, provider availability, etc.",
      "topic": "Chapter 1",
      "difficulty": "medium"
    },
    {
      "q": "Which is a possible AI application in healthcare delivery?",
      "options": [
        "Robotic surgery",
        "Deleting EHRs",
        "Ignoring privacy",
        "Replacing all clinicians without oversight"
      ],
      "answer": 0,
      "explanation": "Robotic surgery is a cited AI-related healthcare application.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "Clinical data mining workflow starts with:",
      "options": [
        "Training a CNN immediately",
        "Posing a research question",
        "Deleting missing values",
        "Writing final conclusion first"
      ],
      "answer": 1,
      "explanation": "A clear clinical/research question guides the data mining process.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "After posing a research question, the next major step is to:",
      "options": [
        "Identify data sources",
        "Publish the results",
        "Choose a font",
        "Open a chatbot"
      ],
      "answer": 0,
      "explanation": "You identify one or more data sources that can answer the question.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Structured healthcare data is usually:",
      "options": [
        "Free-text notes only",
        "Organized in tables with rows and columns",
        "Only X-ray images",
        "Only audio signals"
      ],
      "answer": 1,
      "explanation": "Structured data has consistent tabular organization.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Which is an example of unstructured healthcare data?",
      "options": [
        "Clinical notes",
        "Age column in a table",
        "Diagnosis code column",
        "Patient ID number"
      ],
      "answer": 0,
      "explanation": "Clinical text is unstructured and often full of abbreviations.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Medical images are described as:",
      "options": [
        "Rows of billing codes only",
        "Arrays of intensity values",
        "Only handwritten notes",
        "Only insurance premiums"
      ],
      "answer": 1,
      "explanation": "Images are intensity arrays representing physical energy through tissues.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Signals in healthcare are commonly:",
      "options": [
        "Sensor measurements over time",
        "Doctor job titles",
        "Insurance contracts",
        "PDF filenames"
      ],
      "answer": 0,
      "explanation": "Signals often come from sensors at regular time intervals.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Observational data is:",
      "options": [
        "Data collected as a byproduct of care delivery",
        "Data generated only in randomized experiments",
        "Always perfectly unbiased",
        "Always labelled"
      ],
      "answer": 0,
      "explanation": "Observational healthcare data is collected primarily for care, not research.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Why is timeline important in healthcare data?",
      "options": [
        "Data for a patient is time ordered across care events",
        "It only makes the slide prettier",
        "It replaces privacy",
        "It converts text into images"
      ],
      "answer": 0,
      "explanation": "Correct temporal ordering prevents misuse of future data and improves interpretation.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "A patient-feature matrix has:",
      "options": [
        "One row per hospital only",
        "One row per patient and columns as features",
        "Only unstructured notes",
        "Only images"
      ],
      "answer": 1,
      "explanation": "This table makes data analysis-ready.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Feature engineering means:",
      "options": [
        "Creating useful variables for analysis",
        "Deleting all columns",
        "Replacing doctors",
        "Making final exam questions harder"
      ],
      "answer": 0,
      "explanation": "Feature engineering uses domain knowledge and data patterns to create model inputs.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Metadata is:",
      "options": [
        "Data about data",
        "Only DNA sequence letters",
        "Always useless",
        "Only insurance claims"
      ],
      "answer": 0,
      "explanation": "Metadata such as test order counts can be informative.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Using the number of glucose-related tests to infer diabetes is an example of:",
      "options": [
        "Feature engineering from metadata",
        "Deepfake generation",
        "Robotic surgery",
        "Risk pooling"
      ],
      "answer": 0,
      "explanation": "Test order metadata plus prior knowledge can create useful features.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Which can introduce bias into healthcare data?",
      "options": [
        "Patients deciding whether to seek care",
        "Perfect random sampling of all humans",
        "Data being complete for everyone",
        "A model being transparent"
      ],
      "answer": 0,
      "explanation": "Data excludes people who do not seek/receive care, creating selection bias.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Coding bias can occur because codes are often assigned for:",
      "options": [
        "Billing and documentation purposes",
        "Only neural network training",
        "Only treatment planning",
        "Only wearable devices"
      ],
      "answer": 0,
      "explanation": "Diagnosis/procedure codes are often tied to billing and documentation incentives.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Sensitive features may need removal or special handling mainly because of:",
      "options": [
        "Patient privacy and ethical concerns",
        "They are always mathematically invalid",
        "They cannot be stored in tables",
        "They make websites slow"
      ],
      "answer": 0,
      "explanation": "Sensitive features can affect privacy and fairness.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "A common issue with EHR data is that it may be:",
      "options": [
        "Incomplete for care outside the system",
        "Always complete for all providers",
        "Free from missing values",
        "Always collected for research"
      ],
      "answer": 0,
      "explanation": "EHRs often miss data from other systems or non-care events.",
      "topic": "Chapter 2",
      "difficulty": "medium"
    },
    {
      "q": "Which is NOT a healthcare data type mentioned?",
      "options": [
        "Clinical text",
        "Images",
        "Signals",
        "Shopping cart color"
      ],
      "answer": 3,
      "explanation": "Clinical text, images, and signals are healthcare data types.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "Extract and transform data means:",
      "options": [
        "Prepare data into a form suitable for analysis",
        "Only write the abstract",
        "Only select the exam date",
        "Only use a chatbot"
      ],
      "answer": 0,
      "explanation": "Raw clinical data usually needs transformation before analysis.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "In the LLM → Agent evolution, an LLM mainly provides:",
      "options": [
        "Text generation",
        "Risk pooling",
        "Hospital beds",
        "DNA bases"
      ],
      "answer": 0,
      "explanation": "The slide states LLM: text generation.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "RAG adds what to an LLM?",
      "options": [
        "Retrieval",
        "Hospital billing",
        "Blood tests",
        "Manual coding only"
      ],
      "answer": 0,
      "explanation": "RAG means retrieval-augmented generation.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "An agent adds what beyond an LLM/RAG?",
      "options": [
        "Tools and planning",
        "Only bigger font",
        "Only patient insurance",
        "Only DNA letters"
      ],
      "answer": 0,
      "explanation": "Agent = tools + planning in the evolution slide.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "A full system is best described as:",
      "options": [
        "Full workflow execution",
        "Only text generation",
        "Only random answers",
        "Only images"
      ],
      "answer": 0,
      "explanation": "A system executes a complete workflow.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "Which is a core component of Agentic AI?",
      "options": [
        "Orchestrator",
        "Pharmacy shelf",
        "Patient age only",
        "Exam timer only"
      ],
      "answer": 0,
      "explanation": "Core components include orchestrator, LLM, memory, tools, safety layer.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "The orchestrator is responsible for:",
      "options": [
        "Breaking tasks into steps and managing workflow",
        "Taking X-rays",
        "Paying insurance premiums",
        "Being the patient"
      ],
      "answer": 0,
      "explanation": "It is the brain/controller.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "Memory in an AI agent stores:",
      "options": [
        "Context, user preferences, and intermediate results",
        "Only hospital beds",
        "Only billing fees",
        "Only images"
      ],
      "answer": 0,
      "explanation": "Memory stores short-term and/or long-term context.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "Tools in an agent may include:",
      "options": [
        "APIs, databases, calculators, ML models",
        "Only paragraphs",
        "Only ethical principles",
        "Only patients"
      ],
      "answer": 0,
      "explanation": "Tools enable external actions and real-world interaction.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "Why is a safety layer critical in healthcare agents?",
      "options": [
        "To guard against hallucinations, unsafe recommendations, and privacy violations",
        "To make the UI colorful",
        "To remove doctors from care",
        "To increase file size"
      ],
      "answer": 0,
      "explanation": "Safety is critical because patient harm and privacy are high-stakes.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "A common agent loop is:",
      "options": [
        "Observe → Think → Plan → Act → Reflect → Repeat",
        "Input → Hidden → Output only",
        "Premium → Tax → Payment only",
        "A → C → G → T"
      ],
      "answer": 0,
      "explanation": "This loop appears in the agentic AI material.",
      "topic": "Chapter 3",
      "difficulty": "medium"
    },
    {
      "q": "Human-in-the-loop means:",
      "options": [
        "A human reviews or validates important AI actions/decisions",
        "The AI becomes a human",
        "The patient writes code",
        "No safety is needed"
      ],
      "answer": 0,
      "explanation": "Human oversight is important for clinical safety.",
      "topic": "Chapter 3",
      "difficulty": "medium"
    },
    {
      "q": "Which statement is correct?",
      "options": [
        "An agent can use an ML model as a tool",
        "An agent cannot use tools",
        "RAG always means robotic surgery",
        "Memory means hospital storage only"
      ],
      "answer": 0,
      "explanation": "Agents can use external tools, including ML models.",
      "topic": "Chapter 3",
      "difficulty": "medium"
    },
    {
      "q": "Which is the best healthcare agent design?",
      "options": [
        "LLM + tools + memory + orchestration + safety + human oversight",
        "LLM alone making final diagnoses",
        "Random search without validation",
        "Patient data without privacy"
      ],
      "answer": 0,
      "explanation": "Healthcare agents need structured components and safety.",
      "topic": "Chapter 3",
      "difficulty": "hard"
    },
    {
      "q": "Tool selection belongs most directly to:",
      "options": [
        "Agent core/orchestration behavior",
        "Risk pooling only",
        "Primary care only",
        "PDF compression"
      ],
      "answer": 0,
      "explanation": "Agents choose which tool to use as part of planning and orchestration.",
      "topic": "Chapter 3",
      "difficulty": "medium"
    },
    {
      "q": "A hallucination is dangerous in healthcare because:",
      "options": [
        "It may produce unsupported medical advice",
        "It improves all outcomes",
        "It guarantees fairness",
        "It removes missing data"
      ],
      "answer": 0,
      "explanation": "Unsupported outputs can harm patients if trusted.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "AI is best defined as:",
      "options": [
        "Simulation of human intelligence in machines",
        "A hospital payment method",
        "A type of DNA base",
        "A medical specialty"
      ],
      "answer": 0,
      "explanation": "AI systems perform tasks requiring cognition such as reasoning and learning.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "Machine learning is:",
      "options": [
        "A subset of AI that learns from data",
        "A privacy law",
        "A hospital bed type",
        "A government payer"
      ],
      "answer": 0,
      "explanation": "ML learns patterns from data without explicit programming for every rule.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "NLP is useful in healthcare mainly for:",
      "options": [
        "Understanding and extracting information from clinical text",
        "Detecting edges in X-rays only",
        "Pooling financial risk",
        "Increasing hospital beds"
      ],
      "answer": 0,
      "explanation": "NLP handles human language such as notes and transcription.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "Deep learning involves:",
      "options": [
        "Neural networks with multiple layers",
        "Only rule-based insurance contracts",
        "Only manual diagnosis",
        "Only labelled tables"
      ],
      "answer": 0,
      "explanation": "Deep learning uses layered neural networks for complex data.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "ANN stands for:",
      "options": [
        "Artificial Neural Network",
        "Automatic Nurse Note",
        "Agentic Network Number",
        "Administrative Normalization Name"
      ],
      "answer": 0,
      "explanation": "ANNs are pattern-recognition models inspired by brain-like connections.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "Which is an AI healthcare application?",
      "options": [
        "Drug discovery",
        "Paper folding",
        "Risk pooling only",
        "Hospital cafeteria scheduling only"
      ],
      "answer": 0,
      "explanation": "Drug discovery is a major AI application.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "AI in administration can help with:",
      "options": [
        "Scheduling, billing, records, and resource allocation",
        "Replacing all diagnosis codes",
        "Removing all data quality checks",
        "Ignoring privacy"
      ],
      "answer": 0,
      "explanation": "AI can streamline routine administrative processes.",
      "topic": "OHSC Module 1",
      "difficulty": "medium"
    },
    {
      "q": "AI in personalized medicine uses:",
      "options": [
        "Patient-specific data to tailor treatment",
        "Only hospital name",
        "Only random selection",
        "Only the same treatment for everyone"
      ],
      "answer": 0,
      "explanation": "Personalized medicine considers genetic, lifestyle, and medical history data.",
      "topic": "OHSC Module 1",
      "difficulty": "medium"
    },
    {
      "q": "Virtual health assistants can:",
      "options": [
        "Provide reminders, scheduling support, and basic guidance",
        "Perform unsupervised surgery alone",
        "Guarantee diagnosis",
        "Remove the need for records"
      ],
      "answer": 0,
      "explanation": "Virtual assistants can support engagement and administrative load.",
      "topic": "OHSC Module 1",
      "difficulty": "easy"
    },
    {
      "q": "Transparency in AI healthcare means:",
      "options": [
        "Being able to understand how decisions/recommendations are made",
        "Making all data public",
        "Never using models",
        "Only using black-box systems"
      ],
      "answer": 0,
      "explanation": "Transparency supports trust, accountability, and safe use.",
      "topic": "OHSC Module 1",
      "difficulty": "medium"
    },
    {
      "q": "EHRs commonly include:",
      "options": [
        "Demographics, diagnoses, medications, labs, treatments",
        "Only DNA sequences",
        "Only robot commands",
        "Only final grades"
      ],
      "answer": 0,
      "explanation": "EHRs contain longitudinal patient clinical information.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Genomic data is derived from:",
      "options": [
        "DNA and genetic variations",
        "Insurance premiums",
        "Hospital floor plans",
        "Appointment reminders"
      ],
      "answer": 0,
      "explanation": "Genomic data supports disease-risk and treatment-response analysis.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Which data source provides continuous metrics like heart rate or sleep?",
      "options": [
        "Wearable devices",
        "Hospital chargemaster",
        "Government taxes",
        "CNN filters"
      ],
      "answer": 0,
      "explanation": "Wearables collect ongoing patient-generated data.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Why are EHRs important for AI?",
      "options": [
        "They provide large longitudinal datasets for learning and decision support",
        "They eliminate all bias",
        "They replace training completely",
        "They are always unstructured images"
      ],
      "answer": 0,
      "explanation": "EHRs are a foundation for many healthcare AI models.",
      "topic": "OHSC Module 2",
      "difficulty": "medium"
    },
    {
      "q": "Data standardization helps because it:",
      "options": [
        "Makes records more consistent and comparable",
        "Deletes all diagnoses",
        "Makes AI autonomous",
        "Removes the need for ethics"
      ],
      "answer": 0,
      "explanation": "Consistent formats reduce variability and errors.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Data validation means:",
      "options": [
        "Checking data accuracy, completeness, and plausibility",
        "Training only on test data",
        "Ignoring missing values",
        "Changing all values to zero"
      ],
      "answer": 0,
      "explanation": "Validation catches incomplete or wrong entries.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Preprocessing may include:",
      "options": [
        "Cleaning, encoding, normalization, missing-value handling",
        "Only writing references",
        "Only adding colors",
        "Only choosing a hospital"
      ],
      "answer": 0,
      "explanation": "Preprocessing prepares raw data for AI analysis.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Big data in healthcare is valuable because:",
      "options": [
        "AI can learn from large, varied datasets",
        "Large data is always unbiased",
        "It removes privacy concerns",
        "It never needs cleaning"
      ],
      "answer": 0,
      "explanation": "Large datasets help AI but still need quality and governance.",
      "topic": "OHSC Module 2",
      "difficulty": "medium"
    },
    {
      "q": "Medical imaging data includes:",
      "options": [
        "X-rays, MRIs, CT scans, ultrasounds",
        "Only billing codes",
        "Only demographics",
        "Only patient names"
      ],
      "answer": 0,
      "explanation": "These are common imaging modalities.",
      "topic": "OHSC Module 2",
      "difficulty": "easy"
    },
    {
      "q": "Poor-quality healthcare data may cause:",
      "options": [
        "Misdiagnosis, wrong treatment, and flawed research",
        "Perfect model accuracy",
        "No privacy risk",
        "Automatic fairness"
      ],
      "answer": 0,
      "explanation": "Bad data can harm clinical and research outputs.",
      "topic": "OHSC Module 2",
      "difficulty": "medium"
    },
    {
      "q": "Supervised learning requires:",
      "options": [
        "Labelled data",
        "Only unlabelled data",
        "No training data",
        "Only rewards and penalties"
      ],
      "answer": 0,
      "explanation": "Supervised models learn from known outcomes/labels.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Unsupervised learning is useful for:",
      "options": [
        "Finding hidden patterns or patient clusters",
        "Predicting with known labels only",
        "Manual billing",
        "Risk pooling"
      ],
      "answer": 0,
      "explanation": "It discovers patterns in unlabelled data.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Reinforcement learning uses:",
      "options": [
        "Actions, environment, rewards, and penalties",
        "Only labelled rows",
        "Only medical images",
        "Only static protocols"
      ],
      "answer": 0,
      "explanation": "RL learns decisions through feedback.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Disease/no-disease prediction is usually:",
      "options": [
        "Classification",
        "Clustering only",
        "Risk pooling",
        "Per diem payment"
      ],
      "answer": 0,
      "explanation": "Classification predicts discrete categories.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Predicting patient recovery time is often:",
      "options": [
        "Regression or predictive modelling",
        "Only RAG",
        "Only privacy checking",
        "Only coding"
      ],
      "answer": 0,
      "explanation": "It predicts a future outcome/possibly continuous value.",
      "topic": "OHSC Module 3",
      "difficulty": "medium"
    },
    {
      "q": "Clustering patients by similar symptoms is:",
      "options": [
        "Unsupervised learning",
        "Supervised classification",
        "Manual surgery",
        "LLM formatting"
      ],
      "answer": 0,
      "explanation": "Clustering is a common unsupervised task.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Dynamic treatment planning is well suited to:",
      "options": [
        "Reinforcement learning",
        "Only static PDFs",
        "Only raw text generation",
        "Only risk pooling"
      ],
      "answer": 0,
      "explanation": "RL adapts decisions based on patient responses over time.",
      "topic": "OHSC Module 3",
      "difficulty": "medium"
    },
    {
      "q": "An RL system for insulin dosing would adapt based on:",
      "options": [
        "Blood glucose, activity, diet, and feedback",
        "Hospital logo",
        "Exam answer key",
        "Only patient name"
      ],
      "answer": 0,
      "explanation": "RL personalizes decisions using changing patient state and feedback.",
      "topic": "OHSC Module 3",
      "difficulty": "medium"
    },
    {
      "q": "A supervised model for diagnosis learns from:",
      "options": [
        "Examples where diagnoses/outcomes are known",
        "Only unlabeled genomic data",
        "Only rewards with no labels",
        "Only PDF images"
      ],
      "answer": 0,
      "explanation": "Labels teach the model input-output relationships.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "Which method is best for discovering unknown disease subtypes?",
      "options": [
        "Unsupervised learning",
        "Only fee-for-service",
        "Only virtual assistants",
        "Only manual sorting"
      ],
      "answer": 0,
      "explanation": "Unsupervised methods can reveal hidden groups/subtypes.",
      "topic": "OHSC Module 3",
      "difficulty": "medium"
    },
    {
      "q": "A neural network usually has:",
      "options": [
        "Input, hidden, and output layers",
        "Patient, provider, insurer only",
        "Observe, think, act only",
        "A, C, G, T only"
      ],
      "answer": 0,
      "explanation": "Basic neural network structure includes these layers.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "The input layer in image analysis receives:",
      "options": [
        "Pixel or image feature values",
        "Final diagnosis only",
        "Insurance premium",
        "Hospital budget"
      ],
      "answer": 0,
      "explanation": "Images are converted into numerical inputs.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "Hidden layers mainly:",
      "options": [
        "Learn features and transformations",
        "Pay providers",
        "Store EHRs only",
        "Write citations"
      ],
      "answer": 0,
      "explanation": "Hidden layers extract increasingly useful representations.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "The output layer produces:",
      "options": [
        "Prediction or classification",
        "Raw hospital beds",
        "Insurance premium",
        "DNA cleaning only"
      ],
      "answer": 0,
      "explanation": "The final layer outputs a model decision/prediction.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "CNNs are especially useful for:",
      "options": [
        "Image processing",
        "Risk pooling",
        "Hospital capitation",
        "Manual note-taking only"
      ],
      "answer": 0,
      "explanation": "CNNs are specialized for spatial/image patterns.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "Convolutional layers detect:",
      "options": [
        "Edges, textures, shapes, and local patterns",
        "Premium taxes",
        "Patient satisfaction only",
        "Doctor salaries"
      ],
      "answer": 0,
      "explanation": "Filters detect local visual features.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "Pooling layers:",
      "options": [
        "Reduce spatial dimensions while retaining important features",
        "Increase all image sizes",
        "Delete labels",
        "Classify DNA directly without input"
      ],
      "answer": 0,
      "explanation": "Pooling reduces computation and can reduce overfitting.",
      "topic": "OHSC Module 4",
      "difficulty": "medium"
    },
    {
      "q": "Fully connected layers usually:",
      "options": [
        "Combine extracted features to make predictions",
        "Collect insurance premiums",
        "Create patient records",
        "Perform risk pooling"
      ],
      "answer": 0,
      "explanation": "They integrate learned features for final classification/regression.",
      "topic": "OHSC Module 4",
      "difficulty": "medium"
    },
    {
      "q": "CNNs in radiology can help detect:",
      "options": [
        "Tumours, fractures, pneumonia, and other anomalies",
        "Insurance fraud only",
        "Exam grades",
        "Website themes"
      ],
      "answer": 0,
      "explanation": "CNNs support anomaly detection in medical images.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "A false negative in AI diagnosis means:",
      "options": [
        "The model misses a real condition",
        "The model correctly detects disease",
        "The model flags disease when absent",
        "The patient has no record"
      ],
      "answer": 0,
      "explanation": "False negative = condition present but predicted absent.",
      "topic": "OHSC Module 4",
      "difficulty": "medium"
    },
    {
      "q": "A false positive in AI diagnosis means:",
      "options": [
        "The model flags a condition that is not present",
        "The model misses a disease",
        "The model is always correct",
        "No data exists"
      ],
      "answer": 0,
      "explanation": "False positive = predicted positive but truly negative.",
      "topic": "OHSC Module 4",
      "difficulty": "medium"
    },
    {
      "q": "Ethical challenges of AI-driven diagnosis include:",
      "options": [
        "Bias, explainability, privacy, and clinician oversight",
        "Only page layout",
        "Only file compression",
        "Only model names"
      ],
      "answer": 0,
      "explanation": "These are major concerns in AI diagnosis.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "Project 1 was about:",
      "options": [
        "Classifying DNA sequences with deep learning",
        "Building an insurance system",
        "Hospital payment prediction only",
        "Making a chatbot without model"
      ],
      "answer": 0,
      "explanation": "Project 1 focuses on DNA sequence classification.",
      "topic": "Project 1",
      "difficulty": "easy"
    },
    {
      "q": "Before training a DNA model, sequences must usually be:",
      "options": [
        "Preprocessed and numerically encoded",
        "Converted to hospital bills",
        "Deleted",
        "Printed only"
      ],
      "answer": 0,
      "explanation": "Neural networks need numerical input.",
      "topic": "Project 1",
      "difficulty": "easy"
    },
    {
      "q": "A CNN can be useful for DNA because it can detect:",
      "options": [
        "Local motif-like patterns",
        "Insurance premiums",
        "Hospital beds",
        "Patient appointments"
      ],
      "answer": 0,
      "explanation": "CNN filters can learn local sequence patterns.",
      "topic": "Project 1",
      "difficulty": "medium"
    },
    {
      "q": "BiLSTM can help DNA classification because it:",
      "options": [
        "Captures sequence context in both directions",
        "Only changes image size",
        "Only formats text",
        "Only pools risk"
      ],
      "answer": 0,
      "explanation": "Bidirectional LSTM processes context from forward and backward directions.",
      "topic": "Project 1",
      "difficulty": "medium"
    },
    {
      "q": "Which metric is useful for classification evaluation?",
      "options": [
        "Accuracy, precision, recall, F1-score",
        "Only website visits",
        "Only PMPM",
        "Only pixel count"
      ],
      "answer": 0,
      "explanation": "These are common classification metrics.",
      "topic": "Project 1",
      "difficulty": "easy"
    },
    {
      "q": "The Project 1 report structure includes:",
      "options": [
        "Abstract, introduction, method, experiment, results, discussion, conclusion, references",
        "Only title page",
        "Only code",
        "Only images"
      ],
      "answer": 0,
      "explanation": "The assignment specified a short report with these sections.",
      "topic": "Project 1",
      "difficulty": "medium"
    },
    {
      "q": "Project 2 added:",
      "options": [
        "A simple Agentic AI layer",
        "A hospital payment layer",
        "A pharmacy supply chain only",
        "A robotic surgery module"
      ],
      "answer": 0,
      "explanation": "Project 2 extends the classifier with agentic workflow.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "In Project 2, the model tool is:",
      "options": [
        "predict_dna(sequence)",
        "pay_provider()",
        "pool_risk()",
        "read_xray()"
      ],
      "answer": 0,
      "explanation": "The agent calls predict_dna(sequence).",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "In Project 2, the LLM is responsible for:",
      "options": [
        "Formatting the final human-readable response",
        "Classifying DNA directly",
        "Training the CNN-BiLSTM",
        "Changing labels secretly"
      ],
      "answer": 0,
      "explanation": "The LLM formats; classification comes from the trained model.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "Who performs DNA classification in Project 2?",
      "options": [
        "The trained CNN-BiLSTM model",
        "The Qwen LLM alone",
        "The user manually",
        "The safety layer alone"
      ],
      "answer": 0,
      "explanation": "This is a key principle: model classifies, LLM does not.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "Project 2 marks Low Confidence when:",
      "options": [
        "Confidence < 70%",
        "Confidence ≥ 70%",
        "Any prediction is made",
        "The LLM says so randomly"
      ],
      "answer": 0,
      "explanation": "The rule explicitly flags below 70%.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "Project 2 marks Accepted when:",
      "options": [
        "Confidence is 70% or higher",
        "Confidence is below 70%",
        "There is no sequence",
        "The LLM cannot respond"
      ],
      "answer": 0,
      "explanation": "70% or above is accepted by the rule.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "The project workflow is best summarized as:",
      "options": [
        "User sequence → agent → predict_dna → model output → confidence rule → LLM formatted response",
        "LLM guesses DNA class → no model needed",
        "Hospital EHR → diagnosis code only",
        "Image → CNN → X-ray output"
      ],
      "answer": 0,
      "explanation": "This is the project’s simple agentic workflow.",
      "topic": "Project 2",
      "difficulty": "medium"
    },
    {
      "q": "Which statement is a likely exam trap?",
      "options": [
        "The LLM classifies DNA sequences in Project 2",
        "The model returns confidence",
        "Confidence below 70% is low confidence",
        "The agent calls a tool"
      ],
      "answer": 0,
      "explanation": "The trap is false: the LLM does not classify DNA.",
      "topic": "Project 2",
      "difficulty": "medium"
    },
    {
      "q": "A model trained only on patients who visited a hospital may be biased because:",
      "options": [
        "It excludes people who did not seek or receive care",
        "It includes every person in the population",
        "It is always randomized",
        "It has no missing values"
      ],
      "answer": 0,
      "explanation": "Care-seeking behavior creates selection bias.",
      "topic": "Cross-topic",
      "difficulty": "hard"
    },
    {
      "q": "A healthcare AI system recommending treatment should not rely only on LLM text because:",
      "options": [
        "It needs validated data, tools, safety checks, and clinician oversight",
        "LLMs cannot generate text",
        "Safety is irrelevant",
        "Privacy never matters"
      ],
      "answer": 0,
      "explanation": "Healthcare decisions require controlled workflows and safety.",
      "topic": "Cross-topic",
      "difficulty": "hard"
    },
    {
      "q": "A patient-feature matrix accidentally includes a lab result from after the diagnosis date. This is:",
      "options": [
        "Data leakage / temporal leakage",
        "Risk pooling",
        "Correct timeline use",
        "Unsupervised learning"
      ],
      "answer": 0,
      "explanation": "Using future information to predict earlier outcomes causes leakage.",
      "topic": "Cross-topic",
      "difficulty": "hard"
    },
    {
      "q": "A CNN detecting cancer from MRI is mainly:",
      "options": [
        "Deep learning for medical image analysis",
        "Reinforcement learning for dynamic treatment",
        "Risk pooling",
        "EHR billing only"
      ],
      "answer": 0,
      "explanation": "CNNs are deep learning models for images.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "Grouping patients into unknown subtypes using EHR and genomic data is:",
      "options": [
        "Unsupervised learning",
        "Supervised classification",
        "Fee-for-service payment",
        "LLM-only diagnosis"
      ],
      "answer": 0,
      "explanation": "No labels; goal is hidden group discovery.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "Predicting whether a DNA sequence belongs to class A or B is:",
      "options": [
        "Classification",
        "Regression",
        "Risk pooling",
        "Per diem payment"
      ],
      "answer": 0,
      "explanation": "It predicts a category.",
      "topic": "Cross-topic",
      "difficulty": "easy"
    },
    {
      "q": "If an AI gives a confident but unsupported clinical answer, this is a concern about:",
      "options": [
        "Hallucination and safety",
        "Risk pooling only",
        "Convolution filter size",
        "Genomic encoding only"
      ],
      "answer": 0,
      "explanation": "Unsupported answers are dangerous in healthcare.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "The safest role for AI in high-risk clinical decisions is often:",
      "options": [
        "Decision support with human review",
        "Replacing every clinician automatically",
        "Ignoring patient context",
        "Making final decisions without validation"
      ],
      "answer": 0,
      "explanation": "AI should support rather than replace oversight in high-stakes settings.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "Why can billing/claims data be useful but limited?",
      "options": [
        "It captures services/payment but may not fully reflect clinical status",
        "It is always a complete clinical record",
        "It has no incentives",
        "It is never structured"
      ],
      "answer": 0,
      "explanation": "Claims reflect payment and services, not all clinical details.",
      "topic": "Cross-topic",
      "difficulty": "hard"
    },
    {
      "q": "If a model performs very well on training data but poorly on test data, it likely has:",
      "options": [
        "Overfitting",
        "Risk pooling",
        "Perfect generalization",
        "No need for validation"
      ],
      "answer": 0,
      "explanation": "Overfitting means poor generalization.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "Which is the best explanation of AI + EHR synergy?",
      "options": [
        "EHR provides longitudinal patient data that AI can analyze for decision support",
        "EHR removes privacy requirements",
        "AI makes EHR unnecessary",
        "EHR is only medical imaging"
      ],
      "answer": 0,
      "explanation": "AI can use EHR patterns for prediction and support.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "Which pair is correctly matched?",
      "options": [
        "Supervised learning — labelled outcomes",
        "Unsupervised learning — reward penalties",
        "Reinforcement learning — no feedback",
        "CNN — insurance pooling"
      ],
      "answer": 0,
      "explanation": "Supervised learning relies on labelled outcomes.",
      "topic": "Cross-topic",
      "difficulty": "easy"
    },
    {
      "q": "Which pair is correctly matched?",
      "options": [
        "CNN — image feature extraction",
        "NLP — pooling layers",
        "EHR — convolution filter",
        "Risk pooling — hidden layer"
      ],
      "answer": 0,
      "explanation": "CNNs extract image features.",
      "topic": "Cross-topic",
      "difficulty": "easy"
    },
    {
      "q": "Which is most important for Project 2 safety?",
      "options": [
        "The confidence rule and not letting the LLM invent classification",
        "Letting the LLM override the model",
        "Ignoring confidence",
        "Removing predict_dna"
      ],
      "answer": 0,
      "explanation": "The rule flags uncertainty, and classification remains with model tool.",
      "topic": "Cross-topic",
      "difficulty": "medium"
    },
    {
      "q": "True or False: An agentic AI system in healthcare should include a safety layer.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "Safety prevents hallucinations, unsafe recommendations, and privacy violations.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "q": "True or False: Unstructured healthcare data can include clinical text and images.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "Clinical notes and medical images are unstructured forms.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "True or False: The LLM in Project 2 directly classifies the DNA sequence.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "explanation": "The CNN-BiLSTM model classifies; the LLM formats the response.",
      "topic": "Project 2",
      "difficulty": "easy"
    },
    {
      "q": "True or False: Supervised learning requires labelled examples.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "Labels are known outcomes used during training.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "True or False: Unsupervised learning is mainly used when outcomes are already known.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "explanation": "Unsupervised learning finds patterns without labels.",
      "topic": "OHSC Module 3",
      "difficulty": "easy"
    },
    {
      "q": "True or False: CNNs are commonly used for medical image analysis.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "CNNs are effective for images such as X-rays and MRIs.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "True or False: Healthcare data is always unbiased because it comes from hospitals.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "explanation": "Care-seeking, coding, incentives, and missingness create bias.",
      "topic": "Chapter 2",
      "difficulty": "easy"
    },
    {
      "q": "True or False: Risk pooling shifts financial risk from one individual to a group.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "This is the purpose of insurance/intermediaries.",
      "topic": "Chapter 1",
      "difficulty": "easy"
    },
    {
      "q": "True or False: The output layer of a neural network produces the final prediction.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "explanation": "The output layer maps learned features to class/value.",
      "topic": "OHSC Module 4",
      "difficulty": "easy"
    },
    {
      "q": "True or False: A safety layer is mainly decorative in healthcare AI.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "explanation": "It is critical for clinical safety and privacy.",
      "topic": "Chapter 3",
      "difficulty": "easy"
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "easy",
      "q": "In the Azure healthcare AI pipeline, which service is mainly used to train and deploy machine learning models?",
      "options": [
        "Azure Event Hubs",
        "Azure Machine Learning",
        "Microsoft Power BI",
        "Azure IoT Hub"
      ],
      "answer": 1,
      "explanation": "Azure Machine Learning is the service for the ML model lifecycle: training, evaluation, registration, deployment, and endpoints."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "easy",
      "q": "Which Azure service is mainly used to visualize model outputs and analytics results in dashboards?",
      "options": [
        "Power BI",
        "Azure Data Lake",
        "Azure Functions",
        "IoT Hub"
      ],
      "answer": 0,
      "explanation": "Power BI is used for dashboards and visualization. It consumes results rather than training the model."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "What is the best distinction between Azure IoT Hub and Azure Event Hubs?",
      "options": [
        "IoT Hub trains ML models, while Event Hubs stores raw data",
        "IoT Hub connects/manages IoT devices, while Event Hubs ingests high-volume streaming events",
        "IoT Hub creates dashboards, while Event Hubs creates apps",
        "IoT Hub stores secrets, while Event Hubs manages identity"
      ],
      "answer": 1,
      "explanation": "IoT Hub is device-focused. Event Hubs is event-stream ingestion-focused."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "A hospital wants to store very large raw healthcare datasets before analysis. Which service best fits this role?",
      "options": [
        "Azure Data Lake",
        "Power Automate",
        "Microsoft Entra ID",
        "Power BI"
      ],
      "answer": 0,
      "explanation": "Azure Data Lake is the storage layer for big/raw structured, semi-structured, and unstructured data."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "Which pair is correctly matched?",
      "options": [
        "Power BI — model training",
        "Azure Machine Learning — dashboards",
        "Azure Data Lake — big/raw data storage",
        "Microsoft Entra ID — image preprocessing"
      ],
      "answer": 2,
      "explanation": "Azure Data Lake stores big/raw data. Power BI visualizes, Azure ML trains/deploys models, and Entra ID manages identity/access."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "hard",
      "q": "In a pipeline, Event Hubs receives real-time sensor events. Which service would most directly process streaming data before storage or scoring?",
      "options": [
        "Azure Stream Analytics",
        "Power Apps",
        "Azure Key Vault",
        "Microsoft Cost Management"
      ],
      "answer": 0,
      "explanation": "Azure Stream Analytics is used for real-time stream processing. Event Hubs ingests; Stream Analytics processes."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "hard",
      "q": "A deployed agent needs to securely access an API key for a model endpoint. Which Azure service is most appropriate for storing that secret?",
      "options": [
        "Power BI",
        "Azure Key Vault",
        "Synapse SQL Pool",
        "Azure Monitor"
      ],
      "answer": 1,
      "explanation": "Azure Key Vault securely stores secrets, keys, certificates, and credentials."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "Which service is most associated with authentication, identity, and access control?",
      "options": [
        "Microsoft Entra ID",
        "Azure Machine Learning Pipelines",
        "Azure Data Lake",
        "Power Automate"
      ],
      "answer": 0,
      "explanation": "Microsoft Entra ID manages identity, sign-in, and access permissions."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "What is the role of AKS in an Azure AI architecture?",
      "options": [
        "Creating dashboards for clinicians",
        "Running scalable containerized applications/services",
        "Labelling training data manually",
        "Replacing the EHR system"
      ],
      "answer": 1,
      "explanation": "Azure Kubernetes Service is used to run containerized services at scale, such as APIs, model services, or agent services."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "hard",
      "q": "Which sequence best describes the Azure healthcare AI pipeline shown in the diagram?",
      "options": [
        "Visualize → Store → Ingest → Train",
        "Ingest → Store → Train/Deploy → Consume",
        "Train → Ingest → Consume → Store",
        "Store → Consume → Ingest → Train"
      ],
      "answer": 1,
      "explanation": "The diagram follows the standard lifecycle: ingest data, store it, train/deploy models, then consume outputs through dashboards/apps/workflows."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "Synapse Pipelines are best described as:",
      "options": [
        "A dashboard tool",
        "A service for moving and transforming data in workflows",
        "A password storage system",
        "A clinical diagnosis model"
      ],
      "answer": 1,
      "explanation": "Synapse Pipelines are used for ETL/data movement and orchestration."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "difficulty": "medium",
      "q": "Power Automate is mainly used for:",
      "options": [
        "Training a neural network",
        "Automating workflows such as notifications or approvals",
        "Storing unstructured medical images",
        "Managing IoT device telemetry"
      ],
      "answer": 1,
      "explanation": "Power Automate automates actions and workflows after triggers or model outputs."
    }
  ],
  "flashcards": [
    {
      "front": "Patients",
      "back": "People who need treatment, prevention, health information, or support for someone they care about.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Providers",
      "back": "Doctors, nurses, pharmacists, labs, hospitals, imaging centers, pharmaceutical/device companies, and other care-related organizations.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Intermediaries",
      "back": "Entities that collect funds, pool risk, and pay for healthcare, such as private insurers, payers, health plans, and government programs.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Risk",
      "back": "The possibility of large financial loss due to healthcare needs.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Risk pooling",
      "back": "Sharing risk among many people so the group can absorb healthcare costs better than one individual.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Primary care",
      "back": "First point of entry, usually common conditions and prevention.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Secondary care",
      "back": "Specialist care, often after referral.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Tertiary care",
      "back": "Highly specialized care, often in referral centers.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Quaternary care",
      "back": "Most specialized care for rare and very complex conditions.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Underuse",
      "back": "Needed care is not provided enough.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Overuse",
      "back": "Care is provided when it adds little/no value or may cause harm.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Misuse",
      "back": "Errors or wrong use of treatment/services.",
      "topic": "Chapter 1 — Introduction to Healthcare"
    },
    {
      "front": "Clinical data mining",
      "back": "Using clinical data to answer research questions that can improve patient health.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "EMR/EHR",
      "back": "Electronic record of patient care; useful but incomplete and shaped by care delivery.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Structured data",
      "back": "Consistent table-like data such as diagnosis codes, lab values, medications.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Unstructured data",
      "back": "Free text, images, signals, and other data not naturally stored as fixed tables.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Clinical text",
      "back": "Medical notes full of abbreviations, acronyms, and context-specific language.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Medical images",
      "back": "2D or 3D intensity arrays from X-rays, CT, MRI, etc.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Signals",
      "back": "Sensor measurements over time, such as ECG or vital sign monitoring.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Observational data",
      "back": "Data collected during care delivery, not originally for research.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Metadata",
      "back": "Data about data, such as test orders or timestamps; can be informative.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Patient-feature matrix",
      "back": "Analysis-ready table where rows are patients and columns are features.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Feature engineering",
      "back": "Creating useful input variables using data, metadata, and domain knowledge.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "Bias/error sources",
      "back": "Patient care-seeking behavior, provider incentives, documentation gaps, coding choices, and missingness.",
      "topic": "Chapter 2 — Healthcare Data"
    },
    {
      "front": "LLM",
      "back": "Reasoning and natural-language generation engine, but not enough alone for safe healthcare workflow execution.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "RAG",
      "back": "Retrieval-augmented generation: the model retrieves relevant information before answering.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Agent",
      "back": "A system that can plan, use tools, use memory, and execute steps toward a goal.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Orchestrator",
      "back": "Brain/controller that manages steps, workflow order, and component routing.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Memory",
      "back": "Stores session context, user preferences, intermediate results, or persistent knowledge.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Tools",
      "back": "APIs, EHR access, databases, calculators, ML models, search, and code execution.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Safety layer",
      "back": "Validation, ethical constraints, privacy protection, and human review.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "MCP",
      "back": "A protocol/interface concept for connecting agents with tools or external systems.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Human-in-the-loop",
      "back": "Human oversight for validation and final decision-making, especially in clinical contexts.",
      "topic": "Chapter 3 — Agentic AI in Healthcare"
    },
    {
      "front": "Artificial Intelligence",
      "back": "Systems designed to perform tasks requiring human cognition.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Machine Learning",
      "back": "AI subset that learns patterns from data.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Natural Language Processing",
      "back": "AI technique for clinical notes, transcription, and extracting information from text.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Deep Learning",
      "back": "ML branch using neural networks with multiple layers.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Artificial Neural Network",
      "back": "Algorithms inspired by brain-like connections used for pattern recognition.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Medical imaging AI",
      "back": "AI tools that interpret X-rays, CT, MRI, and other scans.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Predictive analytics",
      "back": "Using historical data to predict future risks or outcomes.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "Personalized medicine",
      "back": "Tailoring treatment using patient-specific information such as genetics, history, and lifestyle.",
      "topic": "OHSC Module 1 — Introduction to AI in Health Care"
    },
    {
      "front": "EHR",
      "back": "Longitudinal digital patient record used for care and AI decision support.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Genomic data",
      "back": "DNA-based information about genetic variation, disease predisposition, and treatment response.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Medical imaging data",
      "back": "Visual scans used for diagnosis; often analyzed by deep learning.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Wearable data",
      "back": "Continuous patient-generated data from devices and sensors.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Standardization",
      "back": "Recording data in consistent formats across systems.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Data validation",
      "back": "Checking that data is complete, plausible, and correct.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Data cleaning",
      "back": "Correcting errors, duplicates, inconsistent values, and missingness.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Big data",
      "back": "Large, varied, fast-growing datasets that enable AI but create storage, quality, and privacy challenges.",
      "topic": "OHSC Module 2 — Data in Health Care and AI"
    },
    {
      "front": "Supervised learning",
      "back": "Learns from inputs paired with known outcomes/labels.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Unsupervised learning",
      "back": "Finds hidden structure without labelled outcomes.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Reinforcement learning",
      "back": "Learns decision policies through feedback from rewards and penalties.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Classification",
      "back": "Predicting a category such as disease/no disease.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Regression",
      "back": "Predicting a continuous value such as risk score or length of stay.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Clustering",
      "back": "Grouping similar patients or disease subtypes.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Dynamic treatment planning",
      "back": "Adjusting treatment over time based on patient response.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Prognosis",
      "back": "Predicting likely course or outcome of disease.",
      "topic": "OHSC Module 3 — Machine Learning for Health Care"
    },
    {
      "front": "Neural network",
      "back": "A model made of connected layers that learns patterns from data.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "Input layer",
      "back": "Receives the input data such as pixels or encoded features.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "Hidden layers",
      "back": "Perform computations and learn features.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "Output layer",
      "back": "Produces final prediction or class.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "CNN",
      "back": "Convolutional Neural Network, specialized for image data.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "Convolutional layer",
      "back": "Applies filters to detect local image features.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "Pooling layer",
      "back": "Reduces image dimensions and computational complexity.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "RNN",
      "back": "Recurrent neural network useful for sequences/time-dependent data.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "FCN",
      "back": "Fully connected network/layer used to combine learned features.",
      "topic": "OHSC Module 4 — Deep Learning & Neural Networks"
    },
    {
      "front": "DNA sequence classification",
      "back": "Assigning a category/class to DNA sequences.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "CNN for DNA",
      "back": "Detects local motif-like patterns in sequences.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "LSTM/BiLSTM",
      "back": "Captures sequential dependencies in DNA sequences.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "Hybrid model",
      "back": "Combines strengths, such as CNN local pattern extraction plus BiLSTM sequence context.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "Encoding",
      "back": "Converting biological sequence characters into numerical input for a model.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "Confidence score",
      "back": "Model-estimated probability or certainty for predicted class.",
      "topic": "Project 1 — DNA Sequence Classification with Deep Learning"
    },
    {
      "front": "predict_dna(sequence)",
      "back": "Tool used by the agent to call the trained classifier.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "Agentic AI layer",
      "back": "Adds workflow control around a model tool.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "Confidence rule",
      "back": "Simple safety/decision rule for accepting or flagging predictions.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "Low Confidence",
      "back": "Label used when model confidence is below 70%.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "Accepted",
      "back": "Label used when confidence is 70% or higher.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "LLM formatting",
      "back": "LLM turns model output into a human-readable response without doing the classification.",
      "topic": "Project 2 — Simple Agentic AI Extension"
    },
    {
      "front": "LLM vs RAG vs Agent",
      "back": "LLM generates/reasons; RAG adds retrieval; Agent adds tools and planning; System executes full workflow.",
      "topic": "Chapter 3"
    },
    {
      "front": "Project 2 confidence rule",
      "back": "Confidence < 70% = Low Confidence; confidence ≥ 70% = Accepted.",
      "topic": "Project 2"
    },
    {
      "front": "Biggest Project 2 trap",
      "back": "The LLM does not classify DNA. The trained CNN-BiLSTM model does.",
      "topic": "Project 2"
    },
    {
      "front": "Clinical data mining steps",
      "back": "Pose question → identify sources → extract/transform → analyze.",
      "topic": "Chapter 2"
    },
    {
      "front": "Healthcare quality dimensions",
      "back": "Safe, effective, patient-centered, timely, efficient, equitable.",
      "topic": "Chapter 1"
    },
    {
      "front": "CNN pipeline basics",
      "back": "Input/preprocessing → convolution → pooling → fully connected → output.",
      "topic": "OHSC Module 4"
    },
    {
      "front": "Supervised vs unsupervised",
      "back": "Supervised uses labels; unsupervised finds hidden patterns without labels.",
      "topic": "OHSC Module 3"
    },
    {
      "front": "RL in healthcare",
      "back": "Agent learns treatment decisions using rewards/penalties and adapts over time.",
      "topic": "OHSC Module 3"
    },
    {
      "front": "Azure Event Hubs vs Azure IoT Hub",
      "back": "Event Hubs = high-volume streaming events. IoT Hub = connects/manages IoT devices and sensors."
    },
    {
      "front": "Azure ML in one line",
      "back": "Train, evaluate, register, deploy, and serve machine learning models."
    },
    {
      "front": "Power BI vs Power Apps vs Power Automate",
      "back": "Power BI = dashboards. Power Apps = low-code app. Power Automate = workflow automation."
    },
    {
      "front": "Azure Data Lake vs Synapse SQL Pool",
      "back": "Data Lake = big/raw broad storage. Synapse SQL Pool = structured SQL analytics."
    }
  ],
  "shortAnswers": [
    {
      "q": "Explain the difference between LLM, RAG, Agent, and System.",
      "a": "LLM mainly generates and reasons over text. RAG adds retrieval from external knowledge. An agent adds tools and planning. A system executes a complete workflow using components such as frontend, backend, agent, APIs, databases, and safety controls.",
      "topic": "Chapter 3"
    },
    {
      "q": "Why is a safety layer critical in healthcare agentic AI?",
      "a": "Because healthcare outputs can affect patient safety and privacy. A safety layer helps prevent hallucinations, unsafe recommendations, privacy violations, unsupported actions, and ensures validation or human-in-the-loop checks.",
      "topic": "Chapter 3"
    },
    {
      "q": "Describe the clinical data mining workflow.",
      "a": "Start with a clinical research question, identify data sources that can answer it, extract and transform the data into analysis-ready form, then analyze the data to answer the question.",
      "topic": "Chapter 2"
    },
    {
      "q": "What is a patient-feature matrix?",
      "a": "A table where each row represents a patient and each column represents a measurement or feature used for analysis or modeling.",
      "topic": "Chapter 2"
    },
    {
      "q": "What is the difference between structured and unstructured healthcare data?",
      "a": "Structured data is organized in consistent rows and columns, such as codes or lab values. Unstructured data lacks a fixed table structure, such as clinical notes, images, and signals.",
      "topic": "Chapter 2"
    },
    {
      "q": "Give examples of AI applications in healthcare.",
      "a": "Diagnosis support, medical image analysis, predictive analytics, drug discovery, personalized medicine, virtual health assistants, robotic surgery, and administration such as scheduling and record processing.",
      "topic": "OHSC Module 1"
    },
    {
      "q": "Compare supervised, unsupervised, and reinforcement learning.",
      "a": "Supervised learning uses labelled data for prediction/classification. Unsupervised learning finds hidden patterns in unlabelled data. Reinforcement learning learns actions over time using rewards and penalties from an environment.",
      "topic": "OHSC Module 3"
    },
    {
      "q": "How are CNNs used in radiology?",
      "a": "CNNs analyze medical images such as X-rays, MRIs, and CT scans by learning filters that detect patterns like edges, textures, shapes, fractures, tumours, lesions, or other anomalies.",
      "topic": "OHSC Module 4"
    },
    {
      "q": "What was the goal of Project 1?",
      "a": "To classify DNA sequences using a deep learning approach after preprocessing and encoding the sequences, training a model, and evaluating its performance.",
      "topic": "Project 1"
    },
    {
      "q": "Explain Project 2 workflow.",
      "a": "The user enters a DNA sequence. The agent receives it and calls predict_dna(sequence). The trained CNN-BiLSTM model returns predicted class and confidence. The agent applies the confidence rule. The LLM formats the final human-readable response.",
      "topic": "Project 2"
    },
    {
      "q": "Does the LLM classify DNA in Project 2? Explain.",
      "a": "No. The LLM only formats the final response. Classification is performed only by the trained CNN-BiLSTM model through the predict_dna(sequence) tool.",
      "topic": "Project 2"
    },
    {
      "q": "Why can healthcare data be biased?",
      "a": "Because it is shaped by who seeks care, what clinicians record, provider incentives, missing data, coding practices for billing, and unequal access to services.",
      "topic": "Chapter 2"
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "q": "Explain the Azure healthcare AI pipeline in four steps.",
      "a": "Data is ingested from devices, streams, databases, or files; stored in services such as Data Lake or Synapse; used to train and deploy models through Azure Machine Learning or AKS; then consumed through Power BI dashboards, Power Apps, or Power Automate workflows."
    },
    {
      "topic": "Chapter 3 — Azure Services",
      "q": "How do you differentiate IoT Hub, Event Hubs, Data Lake, Azure ML, and Power BI?",
      "a": "IoT Hub connects devices. Event Hubs receives streaming events. Data Lake stores big/raw data. Azure ML trains and deploys models. Power BI visualizes results in dashboards."
    }
  ],
  "studyPlan": [
    {
      "phase": "1. First pass understanding",
      "time": "60–90 min",
      "tasks": [
        "Read the High-Yield Roadmap.",
        "Study Chapter 2 and Chapter 3 first because they are concept-heavy and likely exam targets.",
        "Use flashcards for key definitions."
      ]
    },
    {
      "phase": "2. Active recall",
      "time": "90–120 min",
      "tasks": [
        "Open Practice Mode and answer MCQs by topic.",
        "After each wrong answer, read the explanation and jump to the matching study section.",
        "Use the Trap List before attempting the mock exam."
      ]
    },
    {
      "phase": "3. Mock exam",
      "time": "45–60 min",
      "tasks": [
        "Take a 50-question mock exam.",
        "Review wrong answers only.",
        "Repeat with shuffled questions."
      ]
    },
    {
      "phase": "4. Final 30-minute revision",
      "time": "30 min",
      "tasks": [
        "Read the One-Page Cheat Sheet.",
        "Review Project 2 workflow and confidence rule.",
        "Review Agentic AI architecture components.",
        "Review supervised vs unsupervised vs reinforcement learning."
      ]
    },
    {
      "title": "Master Chapter 3 Azure services",
      "time": "25–35 min",
      "tasks": [
        "Study the Azure Exam Map section.",
        "Memorize service roles using the one-line table.",
        "Practice the Azure MCQs until the differences are automatic."
      ]
    }
  ],
  "diagramBank": [
    {
      "page": "Azure Exam Map",
      "title": "Azure Healthcare AI Pipeline — User Screenshot Explained",
      "image": "assets/chapter3-diagrams/azure_pipeline_user_sent.png",
      "description": "End-to-end Azure pipeline: healthcare data sources enter through ingestion services, move into storage, train/deploy Azure ML models, then results are consumed through Power BI, Power Apps, or Power Automate.",
      "examTip": "Most important services to differentiate: IoT Hub = devices, Event Hubs = streaming events, Data Lake = big/raw storage, Azure ML = train/deploy models, Power BI = dashboards."
    },
    {
      "page": 3,
      "title": "LLM to Agent Evolution",
      "image": "assets/chapter3-diagrams/ch3_page_03.jpg",
      "description": "LLM = text generation, RAG adds retrieval, Agent adds tools/planning, System executes full workflow.",
      "examTip": "Compare the four levels; this is a likely definition/trap question."
    },
    {
      "page": 4,
      "title": "Basic Agentic Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_04.jpg",
      "description": "High-level components: LLM, Orchestrator, Tools, Memory, MCP.",
      "examTip": "Know the names and function of each component."
    },
    {
      "page": 11,
      "title": "End-to-End System",
      "image": "assets/chapter3-diagrams/ch3_page_11.jpg",
      "description": "User/App/Backend/Agent/MCP/APIs/EHR and frontend/backend/agent/APIs/DB flow.",
      "examTip": "Explains how an agent is connected to real healthcare systems."
    },
    {
      "page": 12,
      "title": "Agent Internal Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_12.jpg",
      "description": "Input → Planner → LLM → Tools → Memory → Output.",
      "examTip": "Shows the internal steps before the final response."
    },
    {
      "page": 13,
      "title": "Healthcare Workflow",
      "image": "assets/chapter3-diagrams/ch3_page_13.jpg",
      "description": "Input → EHR → Model → Decision.",
      "examTip": "Very simple healthcare AI pipeline."
    },
    {
      "page": 14,
      "title": "Technical Architecture of AI Agents - VERY IMPORTANT",
      "image": "assets/chapter3-diagrams/ch3_page_14.jpg",
      "description": "Layered architecture: UI, orchestration, agent core systems, tool integration, foundation models.",
      "examTip": "Memorize the layers from top to bottom."
    },
    {
      "page": 15,
      "title": "General Architecture of an Agentic System",
      "image": "assets/chapter3-diagrams/ch3_page_15.jpg",
      "description": "User/external systems connect to agent brain, memory, supporting services, tool invocation, and external systems.",
      "examTip": "Shows memory + RAG + tools around the agent brain."
    },
    {
      "page": 16,
      "title": "Observe Think Plan Act Reflect Repeat",
      "image": "assets/chapter3-diagrams/ch3_page_16.jpg",
      "description": "Agent loop: observe, think, plan, act, then reflect and repeat.",
      "examTip": "Likely MCQ: order of agent loop."
    },
    {
      "page": 17,
      "title": "Agentic System Stakeholders",
      "image": "assets/chapter3-diagrams/ch3_page_17.jpg",
      "description": "Healthcare agents involve multiple stakeholders and constraints.",
      "examTip": "Remember that healthcare AI is socio-technical, not only code."
    },
    {
      "page": 18,
      "title": "Data Flow Through AI Agent Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_18.jpg",
      "description": "Data flows through layers while control manages the workflow.",
      "examTip": "Good for explaining difference between data flow and control flow."
    },
    {
      "page": 19,
      "title": "Technical Architecture of AI Agents - Dark Version",
      "image": "assets/chapter3-diagrams/ch3_page_19.jpg",
      "description": "Same layered agent architecture shown again with stronger focus on agent core and tools.",
      "examTip": "Confirms the architecture is central to the chapter."
    },
    {
      "page": 20,
      "title": "Healthcare Agent Architecture Example",
      "image": "assets/chapter3-diagrams/ch3_page_20.jpg",
      "description": "Shows user, agent, tools, data stores, and outputs in a healthcare setting.",
      "examTip": "Use it to answer “how does a healthcare agent work?”"
    },
    {
      "page": 21,
      "title": "Healthcare System Architecture: EHR + APIs",
      "image": "assets/chapter3-diagrams/ch3_page_21.jpg",
      "description": "Shows how healthcare data and APIs feed an agent system.",
      "examTip": "Remember EHR/API integration is how agents access clinical context."
    },
    {
      "page": 22,
      "title": "Healthcare Agent Application Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_22.jpg",
      "description": "Frontend, backend, agent service, and integration blocks.",
      "examTip": "Useful for system design MCQs."
    },
    {
      "page": 23,
      "title": "Agent Interface / App Layout",
      "image": "assets/chapter3-diagrams/ch3_page_23.jpg",
      "description": "User-facing app view for interacting with an agent.",
      "examTip": "Shows that the UI is only the visible layer."
    },
    {
      "page": 24,
      "title": "Microsoft Healthcare Reference Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_24.jpg",
      "description": "Healthcare data interoperability and platform reference architecture.",
      "examTip": "Do not memorize every Azure service; understand why cloud architecture is used."
    },
    {
      "page": 25,
      "title": "Microsoft Healthcare Reference Architecture Diagram",
      "image": "assets/chapter3-diagrams/ch3_page_25.jpg",
      "description": "Large reference architecture for healthcare data and AI integration.",
      "examTip": "Focus on data sources, ingestion, processing, and consumption."
    },
    {
      "page": 26,
      "title": "Azure Cloud Architecture: Microservices",
      "image": "assets/chapter3-diagrams/ch3_page_26.jpg",
      "description": "Microservice-based cloud view for healthcare AI.",
      "examTip": "Connects agentic AI to deployable cloud systems."
    },
    {
      "page": 27,
      "title": "Azure Architecture Building Blocks",
      "image": "assets/chapter3-diagrams/ch3_page_27.jpg",
      "description": "Shows common Azure services used in the architecture.",
      "examTip": "Know examples: identity, functions, storage, monitoring, APIs."
    },
    {
      "page": 28,
      "title": "Agent Tool/Service Interaction Map",
      "image": "assets/chapter3-diagrams/ch3_page_28.jpg",
      "description": "Shows how the agent connects to tools and supporting systems.",
      "examTip": "Tools are not optional; they enable real-world action."
    },
    {
      "page": 29,
      "title": "Healthcare Assistant Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_29.jpg",
      "description": "User, planning/reasoning, plugins/tools, and data resources.",
      "examTip": "The agent coordinates multiple systems rather than answering alone."
    },
    {
      "page": 30,
      "title": "Healthcare Workflow Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_30.jpg",
      "description": "Multi-component workflow with services and data connections.",
      "examTip": "A workflow diagram means steps and dependencies, not just one model."
    },
    {
      "page": 31,
      "title": "Clinical Workflow: Triage Agent",
      "image": "assets/chapter3-diagrams/ch3_page_31.jpg",
      "description": "A triage agent uses symptoms/data to support urgency or routing decisions.",
      "examTip": "Important: output is decision support, not automatic medical authority."
    },
    {
      "page": 33,
      "title": "Patient Flow",
      "image": "assets/chapter3-diagrams/ch3_page_33.jpg",
      "description": "Patient journey stages and care flow categories.",
      "examTip": "Shows how healthcare workflows are time-ordered."
    },
    {
      "page": 34,
      "title": "Multi-Agent Tumor Board",
      "image": "assets/chapter3-diagrams/ch3_page_34.jpg",
      "description": "Specialist agents contribute to an orchestrated clinical recommendation.",
      "examTip": "Likely question: multi-agent systems use specialized agents + orchestrator."
    },
    {
      "page": 36,
      "title": "Agentic AI Architecture Repeated",
      "image": "assets/chapter3-diagrams/ch3_page_36.jpg",
      "description": "Layered architecture repeated; confirms it is high-yield.",
      "examTip": "This is a must-review diagram."
    },
    {
      "page": 39,
      "title": "Multi-Agent System Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_39.jpg",
      "description": "Shows multiple agents communicating under orchestration.",
      "examTip": "Understand coordination and task splitting."
    },
    {
      "page": 40,
      "title": "Clinical / Healthcare Agent Ecosystem",
      "image": "assets/chapter3-diagrams/ch3_page_40.jpg",
      "description": "Circular ecosystem of services, people, data, and tools.",
      "examTip": "Healthcare agents operate in an ecosystem with safety/privacy needs."
    },
    {
      "page": 41,
      "title": "Triage Workflow",
      "image": "assets/chapter3-diagrams/ch3_page_41.jpg",
      "description": "Patient → Agent → EHR/Guidelines → Decision.",
      "examTip": "Simple exam diagram: data in, model/tool processing, decision support out."
    },
    {
      "page": 42,
      "title": "Multi-Agent Tumor Board Workflow",
      "image": "assets/chapter3-diagrams/ch3_page_42.jpg",
      "description": "Radiology, pathology, oncology agents connected through an orchestrator.",
      "examTip": "Specialist agents support complex medical decisions."
    },
    {
      "page": 43,
      "title": "System Integration",
      "image": "assets/chapter3-diagrams/ch3_page_43.jpg",
      "description": "Frontend → Backend → Agent → APIs → DB.",
      "examTip": "Generic integration flow for deployment."
    },
    {
      "page": 44,
      "title": "Enterprise Integration",
      "image": "assets/chapter3-diagrams/ch3_page_44.jpg",
      "description": "Frontend → Backend → Agent → MCP → APIs → DB.",
      "examTip": "MCP standardizes tool/API access."
    },
    {
      "page": 47,
      "title": "Production Pipeline",
      "image": "assets/chapter3-diagrams/ch3_page_47.jpg",
      "description": "Input → Validation → Agent → Monitoring → Output.",
      "examTip": "Production systems need validation and monitoring."
    },
    {
      "page": 48,
      "title": "Azure Cloud Architecture for Agentic AI",
      "image": "assets/chapter3-diagrams/ch3_page_48.jpg",
      "description": "User, web app, API gateway, microservices, agent service, MCP layer, Azure services.",
      "examTip": "Focus on why: scalable, secure deployment."
    },
    {
      "page": 49,
      "title": "Microservices Breakdown",
      "image": "assets/chapter3-diagrams/ch3_page_49.jpg",
      "description": "Auth, patient, AI agent, notification, monitoring services.",
      "examTip": "Shows how a large system is broken into services."
    },
    {
      "page": 55,
      "title": "Azure Architecture Full Pipeline",
      "image": "assets/chapter3-diagrams/ch3_page_55.jpg",
      "description": "Full pipeline from app service/API gateway to AKS, agent service, events, Cosmos DB, EHR, LLM.",
      "examTip": "Connects all deployment services in one picture."
    },
    {
      "page": 64,
      "title": "Lab Workflow",
      "image": "assets/chapter3-diagrams/ch3_page_64.jpg",
      "description": "Build the agent, connect Azure ML, deploy endpoint, test workflow.",
      "examTip": "This mirrors the simple agentic extension idea."
    },
    {
      "page": 65,
      "title": "Azure ML / Agent Workflow Diagram",
      "image": "assets/chapter3-diagrams/ch3_page_65.jpg",
      "description": "Large Azure workflow for data ingestion, model training/deployment, and consumption.",
      "examTip": "This is like the image you sent; understand the stages: ingest → store → train/deploy → consume."
    },
    {
      "page": 66,
      "title": "ML Model Training Pipeline",
      "image": "assets/chapter3-diagrams/ch3_page_66.jpg",
      "description": "Data preparation, training, evaluation, registration, deployment, monitoring.",
      "examTip": "General ML pipeline question."
    },
    {
      "page": 67,
      "title": "Component Flow Diagram",
      "image": "assets/chapter3-diagrams/ch3_page_67.jpg",
      "description": "Colored blocks show system components and their relationships.",
      "examTip": "Use it for architecture vocabulary, not memorizing colors."
    },
    {
      "page": 68,
      "title": "Azure Model Endpoint Flow",
      "image": "assets/chapter3-diagrams/ch3_page_68.jpg",
      "description": "Shows cloud services around model deployment and endpoint usage.",
      "examTip": "The agent calls a deployed model/API to get predictions."
    },
    {
      "page": 69,
      "title": "Healthcare Azure Services Diagram",
      "image": "assets/chapter3-diagrams/ch3_page_69.jpg",
      "description": "Azure services mapped to healthcare AI platform components.",
      "examTip": "Know service categories: compute, AI, data, security, monitoring."
    },
    {
      "page": 70,
      "title": "Azure Healthcare AI Workflow",
      "image": "assets/chapter3-diagrams/ch3_page_70.jpg",
      "description": "Data streams/storage, model training/deployment, Power BI or apps for consumption.",
      "examTip": "Most similar to your screenshot; it shows end-to-end cloud AI lifecycle."
    },
    {
      "page": 83,
      "title": "Visual: Agentic AI Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_83.jpg",
      "description": "Core agent components: orchestrator, LLM, memory, tools, MCP.",
      "examTip": "Last-slide visual summary; very high yield."
    },
    {
      "page": 84,
      "title": "Visual: Healthcare System Flow",
      "image": "assets/chapter3-diagrams/ch3_page_84.jpg",
      "description": "Patient/clinician app → backend → agent → APIs/data.",
      "examTip": "Explains real hospital integration."
    },
    {
      "page": 85,
      "title": "Visual: Azure Cloud Architecture",
      "image": "assets/chapter3-diagrams/ch3_page_85.jpg",
      "description": "Azure microservices view for healthcare AI at scale.",
      "examTip": "Remember AKS/functions/event hub/Cosmos DB as examples, not definitions."
    },
    {
      "page": 86,
      "title": "Visual: MCP Interaction",
      "image": "assets/chapter3-diagrams/ch3_page_86.jpg",
      "description": "Agent uses MCP to invoke tools and receive structured responses.",
      "examTip": "MCP = standardized bridge between agent and tools."
    },
    {
      "page": 87,
      "title": "Visual: Clinical Workflow Triage",
      "image": "assets/chapter3-diagrams/ch3_page_87.jpg",
      "description": "Symptoms → data retrieval → model → decision/recommendation.",
      "examTip": "Supports safe triage workflow explanation."
    },
    {
      "page": 88,
      "title": "Visual: Multi-Agent System",
      "image": "assets/chapter3-diagrams/ch3_page_88.jpg",
      "description": "Tumor board specialist agents feed central orchestrator.",
      "examTip": "Multi-agent = divide specialized tasks, combine final output."
    },
    {
      "page": 89,
      "title": "Visual: Lab Pipeline",
      "image": "assets/chapter3-diagrams/ch3_page_89.jpg",
      "description": "Build agent → connect Azure ML → deploy API → test workflow.",
      "examTip": "Matches practical lab/project understanding."
    }
  ],
  "azureServices": [
    {
      "name": "Azure Event Hubs",
      "memory": "Streaming ingestion",
      "stage": "Ingest",
      "role": "Receives high-volume real-time event streams from apps, devices, or systems.",
      "howToDifferentiate": "Think: many events arriving continuously; not device management and not model training.",
      "examTrap": "Do not confuse it with IoT Hub. Event Hubs is mainly for event streaming ingestion."
    },
    {
      "name": "Azure IoT Hub",
      "memory": "IoT device connection",
      "stage": "Ingest",
      "role": "Connects, monitors, and manages IoT/wearable/medical devices that send patient or sensor data.",
      "howToDifferentiate": "Think: devices and sensors need secure two-way communication.",
      "examTrap": "If the question says devices/wearables/sensors, choose IoT Hub before Event Hubs."
    },
    {
      "name": "Azure Synapse Analytics Pipelines",
      "memory": "ETL / data movement",
      "stage": "Ingest / Transform",
      "role": "Moves data from sources into storage or analytics layers using scheduled or event-triggered pipelines.",
      "howToDifferentiate": "Think: data pipeline, copying, transformation, orchestration.",
      "examTrap": "Do not confuse Synapse Pipelines with Synapse SQL Pool. Pipelines move data; SQL Pool analyzes structured data."
    },
    {
      "name": "Azure Stream Analytics",
      "memory": "Real-time stream processing",
      "stage": "Ingest / Process",
      "role": "Processes streaming data in real time before sending results to storage or dashboards.",
      "howToDifferentiate": "Think: score/process streaming data as it arrives.",
      "examTrap": "Event Hubs ingests streams; Stream Analytics analyzes/processes them."
    },
    {
      "name": "Azure Data Lake",
      "memory": "Big raw data storage",
      "stage": "Store",
      "role": "Stores large volumes of structured, semi-structured, and unstructured healthcare data.",
      "howToDifferentiate": "Think: storage lake for raw/big data before analysis or ML.",
      "examTrap": "Data Lake stores data; it does not train the ML model."
    },
    {
      "name": "Azure Synapse SQL Pool",
      "memory": "Structured analytics",
      "stage": "Store / Analyze",
      "role": "Stores/query structured analytical data using SQL, usually after data is prepared.",
      "howToDifferentiate": "Think: SQL analytics warehouse, not raw file storage.",
      "examTrap": "Data Lake is broad/raw storage; SQL Pool is structured query/analytics."
    },
    {
      "name": "Azure Machine Learning",
      "memory": "Train and deploy models",
      "stage": "Train / Deploy",
      "role": "Builds, trains, evaluates, registers, and deploys ML models as endpoints/APIs.",
      "howToDifferentiate": "Think: the central ML model lifecycle service.",
      "examTrap": "If the question asks which service trains/deploys the model, answer Azure Machine Learning."
    },
    {
      "name": "Azure Kubernetes Service (AKS)",
      "memory": "Scalable containers",
      "stage": "Deploy / Serve",
      "role": "Runs containerized applications, model services, APIs, or agent services at scale.",
      "howToDifferentiate": "Think: scalable container hosting, production deployment.",
      "examTrap": "AKS runs services; Azure ML builds/manages the ML model."
    },
    {
      "name": "Azure Machine Learning Pipelines",
      "memory": "Batch ML workflows",
      "stage": "Train / Batch",
      "role": "Automates multi-step ML workflows such as preprocessing, training, evaluation, or batch scoring.",
      "howToDifferentiate": "Think: repeated ML workflow steps, especially batch processing.",
      "examTrap": "Not the same as Synapse Pipelines; ML Pipelines are for ML workflow automation."
    },
    {
      "name": "Microsoft Power BI",
      "memory": "Dashboards",
      "stage": "Consume",
      "role": "Visualizes model outputs and analytics results in dashboards and reports.",
      "howToDifferentiate": "Think: charts, dashboards, monitoring results.",
      "examTrap": "Power BI consumes/visualizes results; it does not ingest IoT streams or train models."
    },
    {
      "name": "Power Apps",
      "memory": "Low-code app",
      "stage": "Consume",
      "role": "Creates simple low-code applications for users to interact with predictions or workflows.",
      "howToDifferentiate": "Think: app interface for business/clinical users.",
      "examTrap": "Power Apps builds the app; Power Automate automates workflow steps."
    },
    {
      "name": "Power Automate",
      "memory": "Workflow automation",
      "stage": "Consume",
      "role": "Automates actions such as notifications, approvals, or task creation after a model output.",
      "howToDifferentiate": "Think: “when this happens, do that.”",
      "examTrap": "It is not a dashboard tool; Power BI is for visualization."
    },
    {
      "name": "Microsoft Entra ID",
      "memory": "Identity and access",
      "stage": "Security",
      "role": "Manages authentication, identity, and access control for users and services.",
      "howToDifferentiate": "Think: sign-in, permissions, secure access.",
      "examTrap": "Security/identity questions usually point to Entra ID, not Azure ML."
    },
    {
      "name": "Azure Key Vault",
      "memory": "Secrets and keys",
      "stage": "Security",
      "role": "Stores secrets, API keys, certificates, and credentials securely.",
      "howToDifferentiate": "Think: protected passwords/secrets.",
      "examTrap": "Do not store secrets in code; Key Vault is the secure place."
    },
    {
      "name": "Azure Monitor",
      "memory": "Monitoring",
      "stage": "Operations",
      "role": "Tracks logs, metrics, health, and performance of deployed systems.",
      "howToDifferentiate": "Think: observe system behavior after deployment.",
      "examTrap": "Monitoring is after deployment; it is not the service that trains the model."
    },
    {
      "name": "Microsoft Defender for Cloud",
      "memory": "Cloud security posture",
      "stage": "Security",
      "role": "Helps protect cloud workloads and identify security risks.",
      "howToDifferentiate": "Think: cloud security protection and risk detection.",
      "examTrap": "Defender protects the environment; Entra ID controls identity/access."
    },
    {
      "name": "Azure DevOps / GitHub",
      "memory": "CI/CD and code",
      "stage": "Development",
      "role": "Stores code and supports build/deployment workflows for the healthcare AI system.",
      "howToDifferentiate": "Think: version control, deployment pipeline, collaboration.",
      "examTrap": "Development pipeline tools are not model-training services."
    },
    {
      "name": "Microsoft Cost Management",
      "memory": "Cost tracking",
      "stage": "Operations",
      "role": "Tracks and manages cloud spending.",
      "howToDifferentiate": "Think: budget, cost, usage.",
      "examTrap": "Useful operationally, but not usually a core AI concept."
    }
  ],
  "azurePipelineSteps": [
    {
      "step": "1. Ingest",
      "meaning": "Data enters the platform from devices, streams, files, databases, or external systems.",
      "services": "IoT Hub, Event Hubs, Synapse Pipelines, Stream Analytics",
      "examLine": "Ingest = collect incoming healthcare data."
    },
    {
      "step": "2. Store",
      "meaning": "Data is saved in a usable place for analysis and training.",
      "services": "Azure Data Lake, Synapse SQL Pool",
      "examLine": "Store = Data Lake for big/raw data; SQL Pool for structured analytics."
    },
    {
      "step": "3. Train and deploy",
      "meaning": "The ML model is trained, evaluated, registered, deployed, and used for predictions.",
      "services": "Azure Machine Learning, Azure ML Pipelines, AKS",
      "examLine": "Azure ML is the key answer for model lifecycle."
    },
    {
      "step": "4. Consume",
      "meaning": "Clinicians, students, admins, or decision-makers see and use the model output.",
      "services": "Power BI, Power Apps, Power Automate",
      "examLine": "Consume = dashboard, app, or workflow action."
    },
    {
      "step": "5. Secure and monitor",
      "meaning": "Access, secrets, security, logs, and costs are controlled around the whole pipeline.",
      "services": "Entra ID, Key Vault, Defender for Cloud, Azure Monitor, Cost Management",
      "examLine": "Security and monitoring wrap the whole system."
    }
  ]
};