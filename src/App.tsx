import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="experience" command="git log --career">
          <p>Experience</p>
        </Section>
        <Section id="projects" command="ls projects/">
          <p>Projects</p>
        </Section>
      </main>
    </>
  )
}

export default App