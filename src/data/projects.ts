export type Project = {
  name: string
  description: string
  stack: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Driver and Package Management App',
    description:
      'Full-stack web application with complete CRUD for drivers and packages. Session-based authentication with signup and login validation, plus role-based access across server-rendered EJS views and REST endpoints. Includes transaction tracking and usage statistics logging. APIs (GET, POST, PUT, DELETE) tested with Postman.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'REST'],
    // links: [{ label: 'github', href: 'https://github.com/내아이디/저장소' }],
  },
  {
    name: 'Connect 4 with CPU opponent',
    description:
      "Interactive Python Connect 4 with a player-versus-CPU mode. The rule-based CPU has Easy, Normal and Hard levels, and evaluates board states to build winning lines or block the player's threats.",
    stack: ['Python', 'Game logic'],
  },
  {
    name: 'Relational and NoSQL Database System',
    description:
      'Implemented an Oracle SQL database from a conceptual model with enterprise constraints, primary and foreign keys, and transactions. Then mapped the relational schema into nested JSON documents and ran queries and updates in MongoDB.',
    stack: ['Oracle SQL', 'MongoDB', 'Database design'],
  },
]