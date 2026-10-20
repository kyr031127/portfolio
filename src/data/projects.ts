export type Project = {
  name: string
  kind: string
  description: string
  stack: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    kind: 'Personal project',
    description:
      'Terminal-themed portfolio built with React and TypeScript, featuring an interactive command prompt, data-driven components and a responsive layout. Deployed on Vercel with automatic redeploys from GitHub.',
    stack: ['React', 'TypeScript', 'Vite', 'Vercel'],
    // 배포 후 저장소 주소를 넣으세요
    // links: [{ label: 'source', href: 'https://github.com/kyr031127/저장소이름' }],
  },
  {
    name: 'Python Connect 4 Game',
    kind: 'Monash coursework',
    description:
      "Interactive Connect 4 game with a player-versus-CPU mode. The rule-based CPU has Easy, Normal and Hard levels and evaluates board states to build winning combinations or block the player's threats.",
    stack: ['Python', 'Game logic'],
  },
  {
    name: 'Driver and Package Management App',
    kind: 'Monash coursework',
    description:
      'Full-stack web application with complete CRUD for drivers and packages. Session-based authentication with signup and login validation, plus role-based access across server-rendered EJS views and RESTful API endpoints. Includes RESTful APIs (GET, POST, PUT, DELETE), transaction tracking and usage statistics logging.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'REST'],
  },
]