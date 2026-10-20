import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App