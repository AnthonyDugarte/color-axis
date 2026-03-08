import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ColorPalette from './components/ColorPalette'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Features />
        <HowItWorks />
        <ColorPalette />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
