import { useState } from 'react'

import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import BgVideo from "./assets/earth-bg.mp4";
import HeroCard from './components/HeroCard/HeroCard';
import AboutUS from './assets/pages/Aboutus';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <div>
      <div className='h-[1000px] relative'>
      <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <NavBar/>
        <Hero/>
      </div>
      <HeroCard/>
      <AboutUS/>
      
    </div>
    <Footer/>

    </>
  )
}

export default App
