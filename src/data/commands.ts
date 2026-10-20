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
    'Yurae Kim, full-stack developer in Melbourne. Monash BIS graduate (May 2026) who likes turning messy business requirements into clean, working software.',

  projects: projects
    .map((p, i) => `${i + 1}. ${p.name} (${p.stack.slice(0, 3).join(', ')})`)
    .join('\n'),

  skills:
    'Python, Java, JavaScript, TypeScript, PHP, SQL, Node.js, React, Express, MongoDB, Oracle SQL, Git, Linux',

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