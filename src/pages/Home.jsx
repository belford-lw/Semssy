import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Choose from '../components/Choose'
import Testimonails from '../components/Testimonails'
import Process from '../components/Process'
import Card from '../components/Card'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Choose/>
        <Testimonails/>
        <Process/>
        <Card/>
        <Contact/>
    </div>
  )
}

export default Home