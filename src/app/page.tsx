
import React from 'react'
import Hero from './hero/page'
import About from './about/page'
import Skills from './skills/page'
import Project from './projects/page'
import Services from "./services/page"
import Contact from "./contact/page";
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div >
     <Hero/>
    <About/>
    <Skills/>
   <Project/>
   <Services/>
   <Contact/>
    
    </div>
  )
}

export default page