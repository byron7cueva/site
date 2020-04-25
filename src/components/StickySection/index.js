import React, { useRef, useEffect, useState } from 'react'

import { SectionHeader } from '../SectionHeader'
import { StickyContainer } from './style'

export const StickySection = ({ title, children, id }) => {
  const [titleItem, setTitleItem] = useState(null)
  const stickySection = useRef(null)
  const scrollableSection = useRef(null)
  const stickyBackground = useRef(null)

  const setTraslateX = (x,el) => {
    el.style.transform = `translate3d(${x}px,0px,0px)`;
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > stickySection.current.offsetTop) {
        let xPos = window.scrollY - stickySection.current.offsetTop;
        setTraslateX(xPos * -1, scrollableSection.current);
        setTraslateX(xPos, stickyBackground.current);
      }
    })

    const children = scrollableSection.current.querySelectorAll('article')
    
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setTitleItem(entries[0].target.dataset.title)
      }
    }, {
      threshold: [0.5, 0.9]
    })

    children.forEach(element => {
      observer.observe(element)
    })
  }, [stickySection])

  return (
    <StickyContainer ref={stickySection} id={id}>
      <div className='sticky-section'>
        <SectionHeader title={title} />
        <h3>{titleItem}</h3>
        <div className="sticky-section__background" ref={stickyBackground}></div>
        <div className="sticky-section__overflow-mask">
          <div className="sticky-section__items" ref={scrollableSection}>
            { children }
          </div>
        </div>
      </div>
    </StickyContainer>
  )
}