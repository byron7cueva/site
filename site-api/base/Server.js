'use strict'

const debug = require('debug')('site:api:Server')
const express = require('express')
const cors = require('cors')
const { api } = require('../config/index')

const singleton = Symbol()
const singletonEnforcer = Symbol()

class Server {

    #app = null

    constructor (enforcer) {
        if (enforcer !== singletonEnforcer) throw new Error('Cannot construct singleton')

        this.#app = express()
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({ extended: true }))
    }

    static get instance () {
        if (!this[singleton]) {
            this[singleton] = Object.freeze(new Server(singletonEnforcer))
        }
        return this[singleton]
    }

    //#region Public methods
    get app () {
        return this.#app
    }

    init () {
        this.#app.use(cors({
            origin: api.corsOrigin
        }))
        this.#app.use(this.#handleError)
        this.#app.listen(api.port, () => {
            debug(`Server initialice on port ${api.port}`)
        })
    }

    add (path, router) {
        this.#app.use(path, router)
    }
    //#endregion

    #handleError = (error, req, res, next) => {
        const { message, stack } = error
        console.error(message)
        console.error(stack)
        res.status(500).send({ error: message})
    }
}

module.exports = {
    Server
}