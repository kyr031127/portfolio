export type Job = {
  period: string
  title: string
  org: string
  bullets: string[]
}

export const experience: Job[] = [
  {
    period: 'Mar 2026 – Sep 2026',
    title: 'Web Developer',
    org: 'GTD Hospitality, Melbourne',
    bullets: [
      'Designed, built and deployed custom web applications for small-business clients, owning the lifecycle from requirements scoping to production release.',
      'Acted as the primary technical contact, translating business operations into secure technical specifications.',
      'Managed deployment pipelines end to end, including server hardening and production release.',
    ],
  },
  {
    period: 'Jul 2025 – Nov 2025',
    title: 'Business Analyst / Web Developer',
    org: 'We Help Hospitality, Melbourne',
    bullets: [
      'Elicited and analysed client requirements and turned them into functional website specifications.',
      'Built a secure enquiry system with an admin dashboard for status tracking, replies and deletions.',
      'Developed responsive, interactive front-end components aligned with modern usability standards.',
      'Resolved booking system logic and workflow bottlenecks, giving real-time data synchronisation and smoother scheduling.',
    ],
  },
]