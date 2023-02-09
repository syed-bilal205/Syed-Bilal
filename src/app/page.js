"use client" 
import React from 'react'
import {Lines} from 'react-preloaders'
import {motion,useScroll} from 'framer-motion'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Github from '../../components/Github'
import Footer from '../../components/Footer'

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
