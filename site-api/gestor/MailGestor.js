const debug = require('debug')('site:api:MailGestor')
const nodemailer = require('nodemailer')
const { smtp } = require('../config/index')

const singleton = Symbol()
const singletonEnforcer = Symbol()

class MailGestor {

    #transport = null

    constructor (enforce) {
        if (enforce !== singletonEnforcer) throw new Error('Cannot construct singleton')

        this.#transport = nodemailer.createTransport({
            host: smtp.host,
            port: smtp.port,
            secure: true,
            auth: {
                user: smtp.user,
                pass: smtp.pass
            }
        })
    }

    static get instance () {
        if (!this[singleton]) {
            this[singleton] = Object.freeze(new MailGestor(singletonEnforcer))
        }
        return this[singleton]
    }

    async receive ({name, from, subject, text}) {
        const html = `
            <p><strong>De: </strong> ${from}<p/>
            <p><strong>Nombre: </strong> ${name}<p/>
            <p><strong>Asunto: </strong> ${subject}<p/>
            <p>${text}<p/>
        `
        const sendMessage = await this.#transport.sendMail({
            from,
            to: smtp.to,
            subject: 'Mensaje de cliente nuevo',
            html
        })

        debug('Envio de mail: ', sendMessage.response)
        return true
    }
}

module.exports = {
    MailGestor
}