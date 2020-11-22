import React from 'react'
import "../App.css"
import HeroSection from "../components/HeroSection/index"
import Cards from '../components/Cards'

function Home() {
   return (
      <div>
         <HeroSection />
         <Cards />
      </div>
   )
}

export default Home;