import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { AboutSection, AboutContent } from './style'
import data from '../../../content/about.yml'

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
      <h2>{data.title}</h2>
      <AboutContent>
        <p>{data.content}</p>
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