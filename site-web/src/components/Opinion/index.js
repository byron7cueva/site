import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { OpinionContainer } from './style'
import { IoIosQuote } from 'react-icons/io'
import { size, color } from '../../config/constants'
import Img from 'gatsby-image'

export const Opinion = ({ op, className}) => {
  const opinion = op.item

  return (
    <StaticQuery
      query={
        graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <OpinionContainer className={className}>
          <p className='opinion__message'>
            <IoIosQuote size={size.icon} className='opinion__message__left-quote' color={`rgb(${color.rgb.dark})`}/>
            {opinion.message}
            <IoIosQuote size={size.icon} color={`rgb(${color.rgb.dark})`} />
            <a href={opinion.link} target='noopener noreferrer'>{' '}Ver más..</a>
          </p>
          <div className='opinion__writer'>
            <figure>
              <Img fluid={data.allImageSharp.edges.find(element => {
                return (element.node.fluid.src.split('/').pop() === opinion.photo)
              }).node.fluid} />
            </figure>
            <div>
              <p><strong>{opinion.writer}</strong></p>
              <p>{opinion.position}</p>
            </div>
          </div>
        </OpinionContainer>
      )}
    />
  )
}