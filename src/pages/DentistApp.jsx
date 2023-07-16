import React from 'react'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'
import Services from '../components/Services/Index'
import AboutUs from '../components/Aboutus/Index'
import Colors from '../components/colors/Index'
const DentistApp = () => {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <AboutUs />
      <Services />
      </main>
      {/* <Colors /> */}
    </div>
  )
}

export default DentistApp
