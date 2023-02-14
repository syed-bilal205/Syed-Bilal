"use client" 
import React from 'react'
import {Lines} from 'react-preloaders'
import HorizontalScroll from './HorizontalScroll'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Github from './Github'
import Footer from './Footer'

const page = () => {
  

  return (
    <>
      <Lines color={'#20c863'} background="#2d2e2e"/>
      <HorizontalScroll/>
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
