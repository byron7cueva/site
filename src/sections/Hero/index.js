import React from 'react'
import Particles from 'react-particles-js'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { IoIosArrowDropdown } from 'react-icons/io'

import { HeroContent, Anchor } from './style'
import nameSvg from '../../../static/img/all/name.svg'
import { size, color } from '../../config/constants'

export const Hero = () => {
  const config = {
    fps_limit: 10,
    particles: {
      number: { value: 25 },
      size: { value: 3 }
    }
  }

  const {
    hero
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
    >
      <HeroContent
        className='fill-viewport'
      >
        <div>
          <h6>SOY</h6>
          <img src={nameSvg} alt='Byron Cueva' />
          <h5>Full Stack Developer</h5>
        </div>
      </HeroContent>
      <Particles params={config} className='fill-viewport' />
      <Anchor href='#'>
        <IoIosArrowDropdown size={size.icon} color={`rgb(${color.rgb.light})`} />
      </Anchor>
    </BackgroundImage>
  )
}