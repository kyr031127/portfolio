export type Job = {
  period: string
  title: string
  org: string
  stack: string[]
  bullets: string[]
}

export const experience: Job[] = [
  {
    period: 'Mar 2026 – Sep 2026',
    title: 'Full-Stack Developer',
    org: 'GTD Hospitality, Melbourne',
    stack: ['CakePHP', 'MySQL'],
    bullets: [
      'Developed and deployed a custom web application for a hospitality client using CakePHP and MySQL, in a team of 3.',
      'Worked directly with the client to translate business operations into technical specifications.',
    ],
  },
  {
    period: 'Jul 2025 – Nov 2025',
    title: 'Business Analyst / Web Developer',
    org: 'We Help Hospitality, Melbourne (Monash IT Industry Experience Placement)',
    stack: ['CakePHP'],
    bullets: [
      'Acted as the primary contact for clients, eliciting, analysing and translating business requirements and operational needs into functional website specifications.',
      'Built an enquiry system that securely captures and stores user inquiries, with an admin dashboard for centralised management, status tracking, replies and deletions.',
      'Engineered responsive and interactive web components, aligning front-end layouts with modern usability standards.',
      'Resolved complex booking system logic and workflow bottlenecks, ensuring real-time data synchronisation and a seamless scheduling experience.',
    ],
  },
]