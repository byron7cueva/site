import React, { useEffect } from "react"

import { Layout } from '../layouts/WebSite'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Opinions } from '../sections/Opinions'
import { Experiences } from '../sections/Experiences'
import { Skills } from '../sections/Skills'
import { Contact } from '../sections/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  },[])

  console.log('RENDERIZA')

  return (
    <Layout>
      <Hero />
      <About />
      <Opinions />
      <Experiences />
      <Skills />
      <Contact />
    </Layout>
  )
}
