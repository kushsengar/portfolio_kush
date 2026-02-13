export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "MVP Development",
    description:
      "Go from idea to working product. I build lean, production-ready MVPs with clean architecture so you can validate fast and scale later without rewrites.",
    deliverables: [
      "Full-stack web application",
      "REST/GraphQL API",
      "Database design & setup",
      "Deployment & CI/CD pipeline",
      "Technical documentation",
    ],
    idealFor: "Startups & founders validating a product idea",
    icon: "🚀",
  },
  {
    title: "API & Backend Architecture",
    description:
      "Scalable, well-documented backend systems. I design APIs that are a pleasure to integrate with and backends that handle growth without firefighting.",
    deliverables: [
      "API design & implementation",
      "Database schema & optimization",
      "Authentication & authorization",
      "Real-time features (WebSocket)",
      "Performance profiling & tuning",
    ],
    idealFor: "Teams needing backend expertise or an API overhaul",
    icon: "⚙️",
  },
  {
    title: "Performance & Code Audit",
    description:
      "I review your codebase for performance bottlenecks, security gaps, and architectural debt — then deliver a prioritized action plan with fixes.",
    deliverables: [
      "Codebase health report",
      "Performance bottleneck analysis",
      "Security vulnerability assessment",
      "Refactoring recommendations",
      "Priority-ranked action plan",
    ],
    idealFor: "Teams preparing for scale or recovering from tech debt",
    icon: "🔍",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture decisions, tech stack selection, and engineering strategy. I help you make the right technical choices before committing resources.",
    deliverables: [
      "Architecture review & recommendations",
      "Tech stack evaluation",
      "System design documentation",
      "Team workflow optimization",
      "Ongoing advisory support",
    ],
    idealFor: "Non-technical founders or teams at a crossroads",
    icon: "💡",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We talk about your goals, constraints, and timeline.",
  },
  {
    step: 2,
    title: "Proposal",
    description: "I send a clear scope, timeline, and fixed-price quote.",
  },
  {
    step: 3,
    title: "Build",
    description: "I build in sprints with regular demos and check-ins.",
  },
  {
    step: 4,
    title: "Deliver",
    description: "Handoff with documentation, deployment, and support.",
  },
];

export const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Most MVPs take 4–8 weeks. API/backend projects are usually 2–4 weeks. I'll give you a precise estimate after our discovery call.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "I work on fixed-price project quotes, not hourly rates. This means you know the exact cost upfront with no surprises. Payment is milestone-based.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Primarily Java/Spring Boot, React/Next.js, TypeScript, PostgreSQL, and Docker. I choose the best tool for the job and will be honest if a project needs a different stack.",
  },
  {
    question: "Do you work with teams or solo?",
    answer:
      "Both. I can embed into your existing team or own a project end-to-end. I'm comfortable with code reviews, standups, and async collaboration.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "I include 2 weeks of post-launch support for bug fixes. For ongoing work, we can arrange a retainer or ad-hoc arrangement.",
  },
];
