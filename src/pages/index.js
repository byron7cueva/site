import React from "react"

import { Layout } from '../layouts/WebSite'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Opinions } from '../sections/Opinions'
import { Experiences } from '../sections/Experiences'
import { Skills } from '../sections/Skills'
import { Contact } from '../sections/Contact'

export default () => (
  <Layout>
    <Hero />
    <About />
    <Opinions />
    <Experiences />
    <Skills />
    <Contact />
  </Layout>
)
