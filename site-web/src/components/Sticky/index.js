import React, { Component } from 'react'
import Media from 'react-media'

import { TimeLine } from '../TimeLine'
import { StickyContext } from './context'
import { devices } from '../../config/constants'
import { StickySectionContainer, StickyBoundaryContainer, StickyContainer } from './style'


const Sticky = React.forwardRef((props, ref) => {
  const classNameSticky = `
    ${props.className ? props.className : ''}
    ${props.stuck ? 'sticky--stuck' : ''}
  `
  return (
    <StickyContainer
      className={classNameSticky}
      ref={ref}
    >
      <div className='sticky__background' />
      <div className='sticky__content'>
        {props.children}
      </div>
    </StickyContainer>
  )
})

class StickyBoundary extends Component {
  constructor (props) {
    super(props)
    this.topSentinelRef = React.createRef(null)
    this.bottomSentinelRef = React.createRef(null)
    this.topObserver = null
    this.bottomObserver = null
  }

  handleIntersection (stuck) {
    this.props.onChangeSticky(stuck)
  }

  componentDidMount () {
    const target = this.props.stickyRef.current
    const onIntersectionChange = this.handleIntersection.bind(this)

    this.topObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { boundingClientRect, rootBounds } = entry
  
        if (boundingClientRect.bottom < rootBounds.top) {
          onIntersectionChange(true)
        }
        
        if (boundingClientRect.bottom >= rootBounds.top &&
          boundingClientRect.bottom < rootBounds.bottom) {
            onIntersectionChange(false)
        }
      })
    }, {
      threshold: [0]
    })

    this.bottomObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const targetRect = target.getBoundingClientRect()
        const { boundingClientRect, rootBounds, intersectionRatio } = entry

        if (boundingClientRect.bottom > rootBounds.top &&
            intersectionRatio === 1 &&
            targetRect.bottom > boundingClientRect.top) {
              onIntersectionChange(true)
        }
        
        if (boundingClientRect.top < rootBounds.top &&
            boundingClientRect.bottom < rootBounds.bottom) {
              onIntersectionChange(false)
        }
      })
    }, {
      threshold: [1]
    })

    this.topObserver.observe(this.topSentinelRef.current)
    this.bottomObserver.observe(this.bottomSentinelRef.current)
  }

  componentWillUnmount () {
    this.topObserver.unobserve(this.topSentinelRef.current)
    this.bottomObserver.unobserve(this.bottomSentinelRef.current)
  }

  render () {
    return (
      <StickyBoundaryContainer
        className={this.props.className}
      >
        <div className='sticky-boundary__sentinel-top' ref={this.topSentinelRef}>
          Sentinel top
        </div>
        {this.props.children}
        <div className='sticky-boundary__sentinel-bottom' ref={this.bottomSentinelRef}>
          Sentinel bottom
        </div>
      </StickyBoundaryContainer>
    )
  }
}

/**
 * Sticky Item component
 */
class StickyItem extends Component {
  
  static contextType = StickyContext

  handleIntersection (stuck) {
    this.context.onChangeSticky(this.props.title, this.props.period, stuck)
  }

  render () {
    return (
      <StickyBoundary
        className='sticky-item'
        stickyRef={this.context.stickyRef}
        onChangeSticky={this.handleIntersection.bind(this)}
      >
        {this.props.children}
      </StickyBoundary>
    )
  }
}

/**
 * Sticky Section component
 */
class StickySection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Organización',
      period: 'Fecha',
      stuck: false
    }

    this.contextValue = {
      stickyRef: React.createRef(null),
      onChangeSticky: (title, period, stuck) => {
        if (stuck) {
          this.setState({
            title,
            period,
            stuck
          })
        } else {
          this.setState({stuck})
        }
      }
    }

    this.stickySectionContentRef = React.createRef(null)
  }

  render () {
    return (
      <StickySectionContainer>
        <div
          className='sticky-section__content'
          ref={this.stickySectionContentRef}
        >
          <Sticky
            className='sticky-section__sticky'
            ref={this.contextValue.stickyRef}
            stuck={this.state.stuck}
          >
            <div className='sticky-section__sticky__content'>
              <p>{this.state.title}</p>
              <p>{this.state.period}</p>
            </div>
          </Sticky>
          <StickyContext.Provider value={this.contextValue}>
            <div className='sticky-section__items'>
              {this.props.children}
            </div>
          </StickyContext.Provider>
        </div>
        <Media query={devices.laptop}>
          <div className='sticky-section__nav'>
            <TimeLine
              title={this.state.title}
              period={this.state.period}
              scrollerContainer={this.stickySectionContentRef}
              isScrolling={this.props.isScolling}
            />
          </div>
        </Media>
      </StickySectionContainer>
    )
  }
}

export {
  StickySection,
  StickyItem,
  Sticky,
  StickyBoundary
}