import React from 'react'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'
import Services from '../components/Services/Index'
import AboutUs from '../components/Aboutus/Index'
import OurTeam from '../components/Ourteam/Index'
import ReviewsandBeforeafter from '../components/ReviewsandBeforeafter/Index'
import Colors from '../components/colors/Index'
const DentistApp = () => {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <ReviewsandBeforeafter />
      </main>
      {/* <Colors /> */}
    </div>
  )
}

export default DentistApp
