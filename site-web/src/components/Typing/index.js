import React, { Component } from 'react'
import Typed from 'typed.js'

import { Span } from './style'

class Typing extends Component {

  constructor (props) {
    super(props)
    this.inputEl = React.createRef(null)
  }

  componentDidMount () {
    const { strings, typeSpeed, backSpeed, loop } = this.props
    const options = {strings, typeSpeed, backSpeed, loop}
    this.typed = new Typed(this.inputEl.current, options)
  }

  componentWillUnmount () {
    this.typed.destroy()
  }

  render () {
    return (
      <Span ref={this.inputEl}/>
    )
  }
}

export {
  Typing
}