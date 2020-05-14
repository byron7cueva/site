'use strict'

const { MailGestor } = require('../../gestor/MailGestor')
const { Response } = require('../../dto/Response')

module.exports = {
    receiveContactMessage: async ( root, { input }) => {
    	let result
    	const response = new Response()

        try {
            result = await MailGestor.instance.receive(input)
            response.message = 'El mail se envio correctamente'
        } catch (error) {
            console.error(error.message)
            console.error(error.stack)
            response.message = 'Hubo un error al enviar el mail'
            response.sucess = false
        }
        return response
    }
}