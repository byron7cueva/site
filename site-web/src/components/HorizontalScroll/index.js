import React, { useRef, useEffect } from 'react'

import { SectionHeader } from '../Section'
import { HorizontalScrollSectionContainer , HorizontalScrollItemContainer } from './style'

export const HorizontalScrollSection = ({ title, children, id }) => {
  const stickySection = useRef(null)
  const scrollableSection = useRef(null)
  const stickyBackground = useRef(null)

  const setTraslateX = (x,el) => {
    el.style.transform = `translate3d(${x}px,0px,0px)`;
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > stickySection.current.offsetTop) {
        let xPos = window.scrollY - stickySection.current.offsetTop;
        setTraslateX(xPos * -1, scrollableSection.current);
        setTraslateX(xPos, stickyBackground.current);
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [stickySection])

  return (
    <HorizontalScrollSectionContainer ref={stickySection} id={id}>
      <div className='sticky-section'>
        <SectionHeader className='sticky-section__title' title={title} />
        <div className="sticky-section__background" ref={stickyBackground}></div>
        <div className="sticky-section__overflow-mask">
          <div className="sticky-section__items" ref={scrollableSection}>
            { children }
          </div>
        </div>
      </div>
    </HorizontalScrollSectionContainer>
  )
}

export const HorizontalScrollItem = ({ children, width, title }) => (
  <HorizontalScrollItemContainer width={width}>
    <div className='sticky-item__card'>
      <h3 className='sticky-item__title'>{title}</h3>
      <div className='sticky-item__content'>
        {children}
      </div>
    </div>
  </HorizontalScrollItemContainer>
)