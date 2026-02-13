export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  university: string;
  year: string;
  cgpa?: string;
  coursework?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    company: "Accenture",
    role: "Associate Software Engineer Intern",
    period: "May 2025 – July 2025",
    location: "India",
    bullets: [
      "Built Java-based REST APIs and scheduled backend services to fetch exchange rate and pricing data from external systems, process the data, and make it available to internal financial applications",
      "Designed middleware components to validate incoming data, apply transformation and mapping logic, and route processed financial information to target systems in the required format",
      "Implemented business rules, data mapping, and error-handling logic to ensure reliable API-driven workflows, including handling failures and maintaining data consistency",
      "Worked on microservice-style backend components with clear separation of concerns",
    ],
  },
  {
    company: "Infosys SpringBoard",
    role: "AI Engineer Intern",
    period: "December 2024 – February 2025",
    location: "Remote",
    bullets: [
      "Developed a document-based Q&A system using RAG, allowing users to upload PDFs and receive precise, natural language answers from the document's content",
      "Implemented document processing flow that splits PDFs into chunks, converts them into vector representations, and stores them for efficient similarity-based retrieval",
      "Designed a similarity search mechanism to fetch the most relevant document chunks for a given user query and generate accurate, context-aware responses",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology – Computer Science & Engineering",
    university: "IPS Academy Institute of Engineering and Science, Indore",
    year: "October 2022 – May 2026",
    cgpa: "9.32/10.00",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Technologies",
    skills: ["Spring Boot", "MySQL", "REST APIs", "Spring Security", "JWT", "Spring Data JPA"],
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "Keras", "OpenCV", "RAG", "MobileNet V2", "NLP"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger"],
  },
];

export const certifications: string[] = [
  "Oracle Cloud Infrastructure (OCI) Generative AI Professional — Oracle Certified, 2025",
  "DBMS Certification (NPTEL) — Elite Badge, Top 2% among 7,123 participants",
];

export const achievements: string[] = [
  "Solved 900+ problems across LeetCode, Codeforces, and other competitive coding platforms",
  "Qualified Round 2 of TCS CodeVita Season 12 — Rank 1,111 out of 4.5 lakh participants",
];
