import React from 'react'
import Particles from 'react-particles-js'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { ScrollDownButton } from '../../components/ScrollDownButton'
import nameSvg from '../../assets/img/name.svg'
import { color } from '../../config/constants'

export const Hero = () => {
  const config = {
    fps_limit: 10,
    particles: {
      number: { value: 25 },
      size: { value: 3 }
    }
  }

  const {
    hero,
    site
  } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg"}){
          childImageSharp {
            fluid(maxWidth: 1920){
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const background = [
    `linear-gradient(rgba(${color.rgb.alternative},0.85), rgba(${color.rgb.alternative},0.85))`,
    hero.childImageSharp.fluid
  ]

  return (
    <BackgroundImage
      Tag='section'
      fluid={background}
      id='home'
      className='hero'
    >
      <div className='hero__content'>
        <div>
          <h6>SOY</h6>
          <img  data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' className='hero__name' src={nameSvg} alt={site.siteMetadata.title} />
          <h5 data-aos='fade-right'>Full Stack Developer</h5>
        </div>
      </div>
      <Particles params={config} className='hero__particles' />
      <ScrollDownButton />
    </BackgroundImage>
  )
}