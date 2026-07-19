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
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "srijan-school",
    title: "Srijan International School",
    tagline: "Modern, fully responsive premium website for an international school",
    thumbnail: "/projects/srijan-ss.png",
    category: "Frontend",
    role: "Frontend Developer",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
      "React Router",
    ],
    problem:
      "Srijan International School needed a premium, modern, and visually stunning web presence to showcase their academic excellence, facilities, and campus. The website required a fast, responsive, and accessible architecture.",
    solution:
      "Designed and developed a complete frontend solution using React 19 and Vite for instant load times. Implemented a sophisticated design language using Tailwind CSS v4, featuring custom glassmorphism, smooth scroll animations, and interactive galleries. Built a component-driven architecture with 8 dedicated pages including academics, admissions, faculty, and contact workflows.",
    impact: [
      "Responsive, mobile-first design with interactive UI components",
      "Highly optimized production build with client-side routing",
      "Modern aesthetic with custom scroll animations and gallery lightbox",
    ],
    liveUrl: "https://srijan-school.vercel.app/",
    featured: true,
    screenshots: ["/projects/srijan-ss.png"],
  },
  {
    slug: "linktoqr",
    title: "LinkToQR",
    tagline:
      "Free dynamic QR code generator SaaS with real-time scan analytics and 20+ use-case templates",
    thumbnail: "/projects/linktoqr.jpg",
    category: "SaaS",
    role: "Full-Stack Developer",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Analytics",
    ],
    problem:
      "Businesses and individuals need QR codes for WiFi, payments, menus, social media, and more — but most QR generators are either bloated with ads, limited to static codes, or charge for basic features like scan tracking. There was no clean, free, use-case-first QR tool that just works.",
    solution:
      "Built LinkToQR — a free, open-source dynamic QR code generator with 20+ dedicated use-case generators (WiFi, UPI, WhatsApp, Instagram, menus, vCards, and more). Each generator is optimized for its purpose with a clean, distraction-free UI. Users can create unlimited static QR codes, track scan analytics, and edit URLs after printing with dynamic QR codes.",
    impact: [
      "20+ dedicated QR generators tailored to specific use cases",
      "Dynamic QR codes with real-time scan analytics and URL editing",
      "100% free tier with unlimited static QR codes and open-source codebase",
    ],
    liveUrl: "https://linktoqr-alpha.vercel.app/",
    repoUrl: "https://github.com/kushsengar",
    featured: true,
  },
  {
    slug: "structure-studio",
    title: "Structure Studio",
    tagline:
      "Premium architectural, interior & structural design studio website — built for a real client",
    thumbnail: "/projects/structure-studio.jpg",
    category: "Freelance",
    role: "Frontend Developer (Client Project)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "SEO",
      "PWA",
    ],
    problem:
      "An architectural design studio needed a professional, high-converting website to showcase their portfolio of 248+ delivered projects, attract premium residential and commercial clients, and replace their Instagram-only online presence with a proper web platform featuring services, portfolio, contact, and a construction material calculator.",
    solution:
      "Designed and developed a premium, responsive website for Structure Studio with a sophisticated design language — warm earthy tones, editorial typography, and smooth micro-interactions. Built dedicated pages for services (architectural, interior, structural design), a portfolio gallery with project photography, a quote request flow, client testimonials, and an interactive material calculator for construction planning. Implemented full SEO with structured data (JSON-LD), Open Graph meta, PWA support, and optimized image loading.",
    impact: [
      "Complete online presence for a 248+ project design studio serving clients globally",
      "Interactive material calculator for construction cost estimation",
      "Full SEO optimization with JSON-LD structured data and PWA support",
    ],
    liveUrl: "https://structure-studio.vercel.app/",
    featured: true,
  },
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
