import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { OpinionContainer } from './style'
import { IoIosQuote } from 'react-icons/io'
import { size, color } from '../../config/constants'
import Img from 'gatsby-image'

export const Opinion = ({ message, link, writer, position, photo }) => {

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
        <OpinionContainer>
        <p className='opinion__message'>
          <IoIosQuote size={size.icon} className='opinion__message__left-quote' color={`rgb(${color.rgb.dark})`}/>
          {message}
          <IoIosQuote size={size.icon} color={`rgb(${color.rgb.dark})`} />
          <a href={link} target='noopener noreferrer'>{' '}Ver más..</a>
        </p>
        <div className='opinion__writer'>
          <figure>
            <Img fluid={data.allImageSharp.edges.find(element => {
              return (element.node.fluid.src.split('/').pop() === photo)
            }).node.fluid} />
          </figure>
          <div>
            <p>{writer}</p>
            <p>{position}</p>
          </div>
        </div>
      </OpinionContainer>
      )}
    />
  )
}