import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { AlertType } from '../config/enum'

function useResponseMutation (gql, onResponse = () => {}) {
  const [responseMessage, setResponseMessage] = useState(null)
  const [responseType, setResponseType] = useState(AlertType.ERROR)

  const [sendMutation, { data, loading, error }] = useMutation(gql)

  useEffect(() => {
    if (error) {
      setResponseType(AlertType.ERROR)
      setResponseMessage('El servicio no esta disponible por favor intente más tarde')
      return
    }

    if (!loading && data) {
      data.response.success ? setResponseType(AlertType.INFO) : setResponseType(AlertType.ERROR)
      setResponseMessage(data.response.message)
      onResponse(data.response.success)
    }
  },
  [loading, error, data]
  )

  return {loading, responseMessage, responseType, sendMutation }
}

export {
  useResponseMutation
}