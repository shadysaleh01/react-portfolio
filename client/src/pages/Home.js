import React from 'react';
import "../App.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import About from "../components/About";
import Cards from "../components/Cards";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";


function Home() {
   return (
      <>
         <Navbar />
         <HeroSection />
         {/* <About /> */}
         <Cards />
         <Contacts />
         <Footer />
      </>
   )
}

export default Home;