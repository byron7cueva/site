import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { gql } from 'apollo-boost'
import { gql } from '@apollo/client'

import { Section } from '../../components/Section'
import { Alert } from '../../components/Alert'
import { Loading } from '../../components/Loading'
import { AlertType } from '../../config/enum'
import { useResponseMutation } from '../../hooks/useResponseMutation'

export const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [ messageAlert, setMessageAlert ] = useState(null)
  const [ alertType, setAlertType ] = useState(null)

  const mutation = gql`
    mutation ReceiveMessage($input: MailInput!) {
      response: receiveContactMessage(input: $input) {
        message
        success
      }
    }
  `
  const handleChangeShowAlert = show => {
    if (!show) setMessageAlert(null)
  }

  const { loading, responseMessage, responseType, sendMutation } = useResponseMutation(mutation)

  const handleSubmitForm = async (formData) => {
    let result
    try {
      result = await sendMutation({ variables: { input: formData}})
      if (result.data.response.success) reset()
    } catch (e) {}
  }

  useEffect(() => {
    const hasError = Object.entries(errors).length !== 0
    if (hasError) {
      setMessageAlert('Los campos marcados en rojo no se ingresaron correctamente')
      setAlertType(AlertType.WARNING)
      return
    }

    if (!loading && responseMessage !== null) {
      setMessageAlert(responseMessage)
      setAlertType(responseType)
      return
    }
    setMessageAlert(null)
  },
  [loading, errors, responseMessage, responseType]
  )

  const showAlert = messageAlert !== null

  return (
    <Section title='Escribeme' className='contact' id='contact'>
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        <Loading show={loading} message='Enviando' />
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
        <Alert type={alertType} message={messageAlert} isShow={showAlert} time={7} onChangeShow={handleChangeShowAlert}/>
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </Section>
  )
}