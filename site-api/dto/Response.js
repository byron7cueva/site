class Response {
    message = null
    success = true
    data = null

    constructor (data = null, success = true, message = null) {
        this.data = data
        this.success = success
        this.message = message
    }
}

module.exports = {
    Response
}