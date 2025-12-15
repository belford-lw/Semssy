import Hero from '../components/Hero'
import About from '../components/About'
import Choose from '../components/Choose'
import Testimonails from '../components/Testimonails'
import Process from '../components/Process'
import Card from '../components/Card'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Choose/>
        <Testimonails/>
        <Process/>
        <Card/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home