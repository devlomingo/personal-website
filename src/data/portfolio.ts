export interface Skill {
  title: string
  description: string
  tags: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  impacts: string[]
}

export interface Insight {
  title: string
  summary: string
}

export interface AboutHighlight {
  title: string
  description: string
}

export const skills: Skill[] = [
  {
    title: 'SaaS Architecture',
    description:
      'Designing multi-tenant systems with clean domain boundaries, event-driven patterns, and graceful scaling strategies.',
    tags: ['Multi-tenancy', 'Domain-Driven Design', 'Event Sourcing'],
  },
  {
    title: 'Scalable Backend Systems',
    description:
      'Building services that handle millions of requests with predictable latency, from message queues to distributed caching.',
    tags: ['Microservices', 'Message Queues', 'Caching'],
  },
  {
    title: 'AI-Enhanced Development',
    description:
      'Leveraging AI tools and workflows to accelerate development cycles, improve code quality, and ship production-ready features faster.',
    tags: ['AI Tooling', 'Rapid Prototyping', 'Developer Productivity'],
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'Infrastructure as code, container orchestration, and CI/CD pipelines that make deployments boring (in a good way).',
    tags: ['AWS', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Data & APIs',
    description:
      'RESTful and GraphQL API design, database modeling, and data pipeline architecture for analytics and reporting.',
    tags: ['PostgreSQL', 'REST', 'GraphQL', 'Redis'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Senior Backend Engineer',
    company: 'SaaS Platform',
    period: '2022 — Present',
    impacts: [
      'Architected multi-tenant platform serving 500+ enterprise customers with 99.95% uptime',
      'Reduced API response times by 60% through strategic caching and query optimization',
      'Led migration from monolith to microservices, cutting deployment time from hours to minutes',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Tech Company',
    period: '2020 — 2022',
    impacts: [
      'Built real-time data processing pipeline handling 2M+ events per day',
      'Designed and implemented authentication system supporting SSO, RBAC, and multi-factor auth',
      'Mentored junior engineers and established backend code review standards',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Startup',
    period: '2018 — 2020',
    impacts: [
      'Developed core API that powered the company\'s flagship product from 0 to 10K users',
      'Implemented automated testing pipeline that caught 40% more bugs before production',
      'Integrated third-party payment and notification services with fault-tolerant patterns',
    ],
  },
]

export const insights: Insight[] = [
  {
    title: 'The Boring Technology Thesis',
    summary:
      'The best systems are built with well-understood tools. Innovation should happen at the product layer, not the infrastructure layer.',
  },
  {
    title: 'Observability Over Testing',
    summary:
      'Tests tell you if code works in isolation. Observability tells you if the system works in production. Both matter, but one scales better.',
  },
  {
    title: 'APIs as Products',
    summary:
      'An API is a user interface for developers. The same UX principles — consistency, discoverability, error clarity — apply just as much.',
  },
  {
    title: 'Premature Scaling is the Root of All Evil',
    summary:
      'Start with a monolith. Extract services when you have clear domain boundaries, not when you have architectural anxiety.',
  },
]

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Systems Thinker',
    description:
      'I see beyond individual services to the interactions, failure modes, and emergent behaviors of the whole system.',
  },
  {
    title: 'Pragmatic Engineer',
    description:
      'I optimize for delivery speed and reliability, not technical novelty. The right tool is the one that ships.',
  },
  {
    title: 'Leadership-Ready',
    description:
      'I bridge the gap between technical depth and product vision, translating complex decisions into team alignment.',
  },
]
