import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { ExperienceContent } from './style'
import { color } from '../../config/constants'

export const Experience = ({ position, organization, description, initDate, finishDate, cover }) => {
  const getCover = data => {
    const fluid = data.allImageSharp.edges.find(element => {
      return (element.node.fluid.src.split('/').pop() === cover)
    }).node.fluid
    return [
      `linear-gradient(rgba(${color.rgb.alternative},1), rgba(${color.rgb.alternative},0.5), rgba(${color.rgb.alternative},1))`,
      fluid
    ]
  }

  return (
    <StaticQuery
      query={
        graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <ExperienceContent>
          <div className='experience__date'>
            <p>{`${initDate} - ${finishDate}`}</p>
          </div>
          <BackgroundImage
            className='experience__cover'
            fluid={getCover(data)}
          >
            <h3>{position}</h3>
            <div>
              <p>{organization}</p>
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