import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FlyRankCapstone from './pages/FlyRankCapstone'

function App() {
  if (window.location.pathname === '/flyrank-capstone') {
    return <FlyRankCapstone />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App