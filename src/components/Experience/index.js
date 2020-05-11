import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import { ExperienceContent } from './style'
import { color } from '../../config/constants'

export const Experience = ({ position, organization, description, initDate, finishDate, cover, logo }) => {
  const getCover = data => {
    const fluid = data.cover.edges.find(element => {
      return (element.node.fluid.src.split('/').pop() === cover)
    }).node.fluid
    return [
      `linear-gradient(rgba(${color.rgb.alternative},1), rgba(${color.rgb.alternative},0.5), rgba(${color.rgb.alternative},1))`,
      fluid
    ]
  }

  const getLogo = data => {
    return data.logo.edges.find(element => {
      return (element.node.fixed.src.split('/').pop() === logo)
    }).node.fixed
  }

  return (
    <StaticQuery
      query={
        graphql`
          query {
            cover: allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            logo: allImageSharp {
              edges {
                node {
                  fixed(height: 33) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <ExperienceContent>
          
          <BackgroundImage
            className='experience__cover'
            fluid={getCover(data)}
          >
            <h3>{position}</h3>
            <div className='experience__position'>
              <figure>
                <Img fixed={getLogo(data)} />
              </figure>
              <p>{organization}</p>
              <p>{`${initDate} - ${finishDate}`}</p>
            </div>
          </BackgroundImage>
          <div className='expereience__description'>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </ExperienceContent>
      )}
    />
  )
}