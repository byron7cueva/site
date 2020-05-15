import React, { useState, useEffect } from "react"

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
  const [showMenu, setShowMenu] = useState(false)

  const handlerClickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    console.log('INGRESA')
    AOS.init({
      duration: 2000
    })
  },[])

  return (
    <Layout showMenu={showMenu} onClickMenuButton={handlerClickMenuButton} onClickItemMenu={handlerClickMenuButton}>
      <Hero />
      <About />
      <Opinions />
      <Experiences />
      <Skills />
      <Contact />
    </Layout>
  )
}
