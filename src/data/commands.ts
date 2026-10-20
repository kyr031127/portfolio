import { profile } from './profile'
import { projects } from './projects'

export const WELCOME = "Welcome. Type 'help' to get started."

export const commands: Record<string, string> = {
  help: [
    'Available commands:',
    '  about      who I am',
    '  projects   things I\'ve built',
    '  skills     my toolkit',
    '  contact    how to reach me',
    '  clear      clear the screen',
  ].join('\n'),

  about:
    'Yurae Kim, full-stack developer in Melbourne. Monash BIS graduate (2026) who has built and deployed CakePHP and MySQL web applications for real hospitality clients.',

  projects: projects
    .map((p, i) => `${i + 1}. ${p.name} (${p.stack.slice(0, 3).join(', ')})`)
    .join('\n'),

  skills:
    'Python, Java, JavaScript, TypeScript, PHP (CakePHP), Node.js, Express, React, MySQL, MongoDB, Git, Linux',
    
  contact: [
    profile.email,
    profile.linkedin.replace('https://', ''),
    profile.github.replace('https://', ''),
  ].join('\n'),

  whoami: 'yurae',
}

export const easterEggs: Record<string, string> = {
  'sudo hire me': `[sudo] permission granted. Email me: ${profile.email}`,
}