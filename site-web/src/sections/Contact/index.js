import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { Section } from '../../components/Section'

export const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const mutation = gql`
    mutation ReceiveMessage($input: MailInput!) {
      receiveContactMessage(input: $input) {
        message
        success
      }
    }
  `
  const [receiveMessage, { data, loading, called }] = useMutation(mutation)
  const handleSubmitForm = formData => {
    receiveMessage({ variables: { input: formData}})
  }

  useEffect(() => {
    if (!loading && data && data.receiveContactMessage.success) {
      reset()
    }
  },
  [loading]
  )

  return (
    <Section title='Escribeme' className='contact' id='contact'>
      <p className='contact__mail'><i className='icon-mail' /> byron7cueva@gmail.com</p>
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        { loading && <p>Enviando...</p>}
        <div className='contact__name-email'>
          <input
            className={errors.name ? 'error' : ''}
            name='name'
            type='text'
            placeholder='Nombres'
            ref={register({
              required: 'El campo nombre es requerido'
            })}
          />
          <input
            className={errors.from ? 'error' : ''}
            name='from'
            type='email'
            placeholder='Correo'
            ref={register({
              required: 'El campo correo es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'dirección de correo inválida'
              }
            })}
          />
        </div>
        <input
          className={errors.subject ? 'error' : ''}
          name='subject'
          type='text'
          placeholder='Asunto'
          ref={register({
            required: 'El campo asunto es requrido'
          })}
        />
        <textarea
          className={errors.text ? 'error' : ''}
          name='text'
          placeholder='Descripción'
          ref={register({
            required: 'El campo descripción es requerido'
          })}
        />
        {Object.entries(errors).length !== 0 &&
          <p className='alert-error'><small>Los campos marcados en rojo no se ingresaron correctamente</small></p>
        }
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </Section>
  )
}