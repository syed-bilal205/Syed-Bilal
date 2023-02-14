"use client" 
import React from 'react'
import {Lines} from 'react-preloaders'
import {motion,useScroll} from 'framer-motion'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Github from './Github'
import Footer from './Footer'

const page = () => {
  
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Lines color={'#20c863'} background="#2d2e2e"/>
      <motion.div className='fixed top-0 left-0 right-0 h-[10px] origin-left bg-[#20c863] z-50' style={{ scaleX:  scrollYProgress }} />
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default page
