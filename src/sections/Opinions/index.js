import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io'

import { Section } from '../Section'
import { Opinion } from '../../components/Opinion'
import { useArrayNavigation } from '../../hooks/useArrayNavigation'
import { size, color } from '../../config/constants'
import data from '../../../content/opinion.yml'

export const Opinions = () => {
  const {item, next, prev} = useArrayNavigation(data.content)

  return (
    <Section title={data.title} className='opinions'>
      <Opinion {...item.item} />
      <div className='opinions__navigation'>
        <button onClick={prev}>
          <IoIosArrowDropleft size={size.icon} color={`rgb(${color.rgb.light})`} />
        </button>
        <button onClick={next}>
          <IoIosArrowDropright size={size.icon} color={`rgb(${color.rgb.light})`} />
        </button>
      </div>
    </Section>
  )
}