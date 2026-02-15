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
    title: 'Backend Architecture & API Design',
    description:
      'Designing secure, high-performance backend systems and RESTful APIs that power millions of transactions across high-traffic e-commerce platforms.',
    tags: ['Laravel', 'Node.js', 'REST APIs', 'System Design'],
  },
  {
    title: 'Scalable Systems & Performance',
    description:
      'Building infrastructure that handles massive traffic spikes with predictable latency through strategic caching, query optimization, and distributed processing.',
    tags: ['Redis', 'Elasticsearch', 'Queue Systems', 'Database Indexing'],
  },
  {
    title: 'SaaS & E-Commerce Infrastructure',
    description:
      'Engineering multi-tenant platforms with clean domain boundaries, event-driven patterns, and the resilience required for enterprise-grade e-commerce.',
    tags: ['Multi-tenancy', 'High Availability', 'SaaS Platforms', 'E-Commerce'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'End-to-end deployment pipelines, infrastructure management, and CI/CD automation that make releases reliable and rollbacks instant.',
    tags: ['AWS', 'Cloudflare', 'CI/CD', 'Performance Monitoring'],
  },
  {
    title: 'Technical Leadership & Quality',
    description:
      'Leading engineering teams with Agile methodologies, fostering code quality through testing practices, and mentoring engineers to deliver at scale.',
    tags: ['Agile', 'Unit Testing', 'Code Review', 'Team Mentorship'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Senior Backend Engineer',
    company: 'Salla E-Commerce Platform',
    period: '2022 — Present',
    impacts: [
      'Architected and launched an advanced account service — reducing SMS costs, implementing fingerprint authentication, and streamlining cross-system access',
      'Led backend development for the Reviews & Feedback system, boosting user engagement while ensuring stability under high-traffic conditions',
      'Enabled the Landing Page Builder launch with optimized backend for high content volume, delivering speed, stability, and analytics insights',
      'Drove performance optimization and real-time error tracking across the platform, reducing downtime and improving reliability at scale',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Salla E-Commerce Platform',
    period: '2021 — 2022',
    impacts: [
      'Improved system scalability through strategic database indexing and query optimization across core services',
      'Implemented Redis caching and session management, significantly reducing server load and response times',
      'Integrated Elasticsearch for advanced search capabilities serving thousands of merchants',
      'Built robust distributed logging systems and managed background job processing at scale',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'Salla E-Commerce Platform',
    period: '2021',
    impacts: [
      'Resolved critical production issues using real-time debugging tools, ensuring platform stability',
      'Bridged the gap between technical teams and non-technical stakeholders with clear, actionable communication',
      'Integrated customer feedback directly into engineering improvements, accelerating product iteration',
    ],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Independent',
    period: '2019 — 2021',
    impacts: [
      'Built scalable SaaS platforms and backend services using Laravel and Node.js for diverse clients',
      'Deployed production systems on AWS and Cloudflare with a focus on performance and security',
      'Translated complex business requirements into reliable technical solutions that drove client growth',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'General Authority of Zakat',
    period: '2019',
    impacts: [
      'Developed robust web applications using CodeIgniter, delivering clean and maintainable full-stack solutions',
      'Managed the complete development lifecycle from planning through deployment and maintenance',
    ],
  },
]

export const insights: Insight[] = [
  {
    title: 'Architecture Over Frameworks',
    summary:
      'Frameworks change. Sound architectural principles don\'t. I design systems around domain boundaries and data flow — the framework is an implementation detail.',
  },
  {
    title: 'Performance is a Feature',
    summary:
      'Every millisecond of latency costs conversions. I treat performance as a first-class requirement, not an afterthought — from database queries to API response times.',
  },
  {
    title: 'Reliability at Scale',
    summary:
      'High-traffic systems demand more than good code. They need observability, graceful degradation, and infrastructure that fails predictably when pushed to the edge.',
  },
  {
    title: 'Ship, Measure, Iterate',
    summary:
      'The best backend decisions are data-driven. I instrument systems to surface real performance metrics, then optimize where the numbers say it matters most.',
  },
]

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Scalable Systems Architect',
    description:
      'I design backend systems that handle millions of requests with predictable performance, building for the traffic of tomorrow — not just today.',
  },
  {
    title: 'Performance-Driven Engineer',
    description:
      'I obsess over latency, throughput, and cost efficiency — turning slow systems into fast ones through strategic optimization and deep technical insight.',
  },
  {
    title: 'Technical Leader',
    description:
      'I bridge engineering depth with business impact, mentoring teams, driving architectural decisions, and delivering solutions that directly grow the bottom line.',
  },
]
