import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Section } from '../../components/Section'
import { Opinion } from '../../components/Opinion'
import { useArrayNavigation } from '../../hooks/useArrayNavigation'
import { size, color } from '../../config/constants'
import data from '../../../content/opinion.yml'

export const Opinions = () => {
  const {item, next, prev} = useArrayNavigation(data.content, 26)
  const sizeIcon = size.icon * 1.5

  return (
    <Section title={data.title} className='opinions' id='opinions'>
      <div data-aos="zoom-in">
        <TransitionGroup className='opinions__content'>
          <CSSTransition
            timeout={1000}
            classNames="fade"
            key={item.item.writer}
          >
            <Opinion op={item} className='opinions__item'/>
          </CSSTransition>
        </TransitionGroup>
        <div className='opinions__navigation'>
          <button onClick={prev}>
            <IoIosArrowDropleft size={sizeIcon} color={`rgb(${color.rgb.light})`} />
          </button>
          <button onClick={next}>
            <IoIosArrowDropright size={sizeIcon} color={`rgb(${color.rgb.light})`} />
          </button>
        </div>
      </div>
    </Section>
  )
}