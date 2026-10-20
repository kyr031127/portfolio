import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Section id="projects" command="ls projects/">
          <p>Projects</p>
        </Section>
      </main>
    </>
  )
}

export default App