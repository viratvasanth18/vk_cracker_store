import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import QualitySafety from '../components/QualitySafety'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

function Home() {
  return (
    <div className="min-h-screen bg-dark-900 overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <About />
        <WhyChooseUs />
        <QualitySafety />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Home
