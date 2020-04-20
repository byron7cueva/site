import React from "react"

import { Layout } from '../layouts/WebSite'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Opinions } from '../sections/Opinions'

export default () => (
  <Layout>
    <Hero />
    <About />
    <Opinions />
  </Layout>
)
