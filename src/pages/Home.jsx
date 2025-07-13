import Header from '../components/Header'
import Entry from '../components/Home/Entry'
import ParticlesComponent from '../components/Home/Particles'
import About from '../components/Home/About'
import ProjectSection from '../components/Home/ProjectSection'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
      <div className="particles">
        <ParticlesComponent />
      </div>
      <Header />
      <Entry />
      <About />
      <ProjectSection />
      <Contact />
    </>
  )
}

export default Home