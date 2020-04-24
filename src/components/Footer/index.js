import React from 'react'

import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { FooterContainer } from './style'
import { size, color } from '../../config/constants'

export const Footer = () => (
  <FooterContainer>
    <p>Copyright © 2020 Byron Cueva</p>
    <div className='footer__networking'>
      <a href='https://ec.linkedin.com/in/byron7cueva' target='noopener noreferrer'>
        <FaLinkedin size={size.icon} color={`rgb(${color.rgb.light})`}/>
      </a>
      <a href='https://github.com/byron7cueva' target='noopener noreferrer'>
        <FaGithub size={size.icon} color={`rgb(${color.rgb.light})`} />
      </a>
      <a href='https://twitter.com/byron7cueva' target='noopener noreferrer'>
        <FaTwitterSquare size={size.icon} color={`rgb(${color.rgb.light})`} />
      </a>
    </div>
  </FooterContainer>
)