export interface Project {
  slug: string;
  title: string;
  tagline: string;
  thumbnail: string;
  category: string;
  role: string;
  techStack: string[];
  problem: string;
  solution: string;
  impact: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "violence-threat-alerting-system",
    title: "Violence & Threat Alerting System",
    tagline: "Real-time video surveillance with CNN-based threat detection",
    thumbnail: "/projects/violence-detection.jpg",
    category: "AI/ML",
    role: "ML Engineer",
    techStack: ["MobileNet V2", "TensorFlow", "Keras", "OpenCV", "Python"],
    problem:
      "Security teams monitoring live video feeds cannot realistically watch multiple streams simultaneously. Suspicious activities like violence or threats go undetected until after the fact, leading to delayed response and increased risk.",
    solution:
      "Developed a real-time violence and threat detection system that analyzes live video streams using deep learning. Trained and fine-tuned CNN models (MobileNet V2) with TensorFlow and Keras to classify video frames and detect violent patterns. Designed an instant alert mechanism to notify users the moment suspicious activity is detected.",
    impact: [
      "Real-time detection with low latency on live video streams",
      "High accuracy classification using fine-tuned MobileNet V2",
      "Instant alert notifications on detecting suspicious activities",
    ],
    repoUrl: "https://github.com/kushsengar",
    featured: true,
  },
  {
    slug: "blog-management-system",
    title: "Blog Management System",
    tagline: "Secure, full-featured blog platform with JWT auth and role-based access",
    thumbnail: "/projects/blog-cms.jpg",
    category: "Full-Stack",
    role: "Full-Stack Engineer",
    techStack: ["Spring Boot", "MySQL", "REST APIs", "Java", "Spring Security", "JWT", "Swagger"],
    problem:
      "Content teams needed a secure, self-hosted blog platform with proper authentication, role-based access control, and well-documented APIs — without the overhead of heavy CMS solutions like WordPress.",
    solution:
      "Built a secure Blog Management System using Spring Boot with Spring Data JPA for database management and Swagger UI for interactive API documentation. Implemented JWT-based authentication with Spring Security and role-based access control. Supported full CRUD operations for blog posts and comments through structured REST APIs.",
    impact: [
      "JWT-based authentication with role-based access control",
      "Full CRUD for posts and comments via structured REST APIs",
      "Interactive API docs via Swagger UI for easy integration",
    ],
    repoUrl: "https://github.com/kushsengar",
    featured: true,
  },
  {
    slug: "rag-document-qa-system",
    title: "RAG Document Q&A System",
    tagline: "AI-powered document question answering using Retrieval-Augmented Generation",
    thumbnail: "/projects/rag-qa.jpg",
    category: "AI/ML",
    role: "AI Engineer Intern @ Infosys SpringBoard",
    techStack: ["Python", "RAG", "Vector DB", "PDF Processing", "NLP"],
    problem:
      "Users needed to extract precise answers from lengthy PDF documents without reading through hundreds of pages. Traditional keyword search couldn't understand natural language queries or provide contextual answers.",
    solution:
      "Developed a document-based Q&A system using Retrieval-Augmented Generation (RAG). Implemented a processing pipeline that splits PDFs into chunks, converts them into vector representations, and stores them for similarity-based retrieval. Designed a search mechanism to fetch the most relevant chunks for a query and generate accurate, context-aware natural language responses.",
    impact: [
      "Natural language answers directly from uploaded PDF documents",
      "Efficient similarity-based retrieval using vector embeddings",
      "Context-aware response generation for precise answers",
    ],
    repoUrl: "https://github.com/kushsengar",
    featured: true,
  },
  {
    slug: "exchange-rate-api-service",
    title: "Exchange Rate API Service",
    tagline: "Microservice backend for real-time financial data processing",
    thumbnail: "/projects/exchange-rate.jpg",
    category: "Backend",
    role: "Associate Software Engineer Intern @ Accenture",
    techStack: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    problem:
      "Internal financial applications needed reliable, up-to-date exchange rate and pricing data from external systems, but lacked a unified backend service to fetch, validate, transform, and route this data consistently.",
    solution:
      "Built Java-based REST APIs and scheduled backend services to fetch exchange rate and pricing data from external systems. Designed middleware components to validate incoming data, apply transformation and mapping logic, and route processed financial information to target systems. Implemented business rules, error-handling, and data consistency mechanisms across microservice-style backend components.",
    impact: [
      "Reliable API-driven workflows with robust error handling",
      "Microservice architecture with clear separation of concerns",
      "Automated data validation, transformation, and routing",
    ],
    featured: false,
  },
];
