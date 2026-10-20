import Section from './components/Section'

function App() {
  return (
    <main>
      <Section id="experience" command="git log --career">
        <p>Experience</p>
      </Section>
      <Section id="projects" command="ls projects/">
        <p>Projects</p>
      </Section>
    </main>
  )
}

export default App