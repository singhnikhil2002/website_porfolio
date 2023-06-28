import React from 'react'
import Header from './components/Header/Header'
import About   from './components/About/About'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
<>
      <Header />
      <About />
      <Nav />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
  </>
  )
}

export default App