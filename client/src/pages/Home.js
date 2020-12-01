import React from 'react'
import "../App.css"
import Navbar from "../components/Navbar/index"
import About from "../components/About/About"
import HeroSection from "../components/HeroSection"
import Cards from '../components/Cards/index'
import Contacts from "../components/Contacts/Form"
import Footer from "../components/Footer/footer";


function Home() {
   return (
      <div>
         <Navbar />
         <HeroSection />
         {/* <About /> */}
         <Cards />
         <Contacts />
         <Footer />
      </div>
   )
}

export default Home;