import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { AboutSection, AboutContent } from './style'

export const About = () => {
  const {
    photo,
    figures
  } = useStaticQuery(
    graphql`
      query {
        photo: file(relativePath: { eq: "photo.png"}){
          childImageSharp {
            fluid(maxWidth: 404, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
        figures: file(relativePath: { eq: "figures.png"}){
          childImageSharp {
            fluid(maxWidth: 404, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <AboutSection>
      <h2>Sobre mi</h2>
      <AboutContent>
        <p>
          Soy Ingeniero en Sistemas Computacionales, tengo 6 años de experiencia en desarrollo de software. Me apasiona la tecnología e investigación, me gustan los retos mucho mejor si estos involucran el aprendizaje. Pienso que la mejor manera de viajar acorde al tiempo es automatizando procesos y que un buen trabajo depende de cuánto y cómo lo mides o validas.
        </p>
        <BackgroundImage
          Tag='figure'
          className='about-content__photo'
          style={{
            backgroundSize: 'contain'
          }}
          fluid={figures.childImageSharp.fluid}
        >
          <Img fluid={photo.childImageSharp.fluid} />
        </BackgroundImage>
      </AboutContent>
    </AboutSection>
  )
}