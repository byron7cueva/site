import React from 'react'

import { Section } from '../../components/Section'

export const Contact = () => (
  <Section title='Escribeme' className='contact' id='contact'>
    <p className='contact__mail'><i className='icon-mail' /> byron7cueva@gmail.com</p>
    <form>
      <div className='contact__name-email'>
        <input type='text' placeholder='Nombres' />
        <input type='email' placeholder='Correo' />
      </div>
      <input type='text' placeholder='Asunto' />
      <textarea placeholder='Descripción' />
      <button className='btn'>Enviar</button>
    </form>
  </Section>
)