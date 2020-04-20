import { useState } from 'react'

export function useArrayNavigation (array) {
  const [index, setIndex] = useState(0)
  let item = array[index]

  const next = () => {
    const increment = index + 1
    increment === array.length ? toIndex(0) : toIndex(increment)
  }

  const prev = () => {
    const decrement = index - 1
    decrement === -1 ? toIndex(array.length - 1) : toIndex(decrement)
  }

  const toIndex = i => {
    const index = parseInt(i)
    if (index >=0 && index < array.length) {
      setIndex(index)
      item = array[index]
    }
  }

  return {item, index, next, prev, toIndex}
}