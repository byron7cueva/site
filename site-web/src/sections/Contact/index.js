import React from 'react'
import { useForm } from 'react-hook-form'
import { gql } from 'apollo-boost'

import { Section } from '../../components/Section'
import { Alert } from '../../components/Alert'
import { AlertType } from '../../config/enum'
import { useResponseMutation } from '../../hooks/useResponseMutation'

export const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const mutation = gql`
    mutation ReceiveMessage($input: MailInput!) {
      response: receiveContactMessage(input: $input) {
        message
        success
      }
    }
  `

  const handleResponse = success => {
    if (success) {
      reset()
    }
  }

  const { loading, responseMessage, responseType, sendMutation } = useResponseMutation(mutation, handleResponse)

  const handleSubmitForm = formData => {
    sendMutation({ variables: { input: formData}})
  }

  const hasError = Object.entries(errors).length !== 0

  return (
    <Section title='Escribeme' className='contact' id='contact'>
      {hasError &&
          <Alert type={AlertType.WARNING} message='Los campos marcados en rojo no se ingresaron correctamente'/>
      }
      { !loading && responseMessage && 
        <Alert type={responseType} message={responseMessage} time={5} />
      }
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
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </Section>
  )
}