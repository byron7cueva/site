import { useState, useEffect } from 'react'

function useScrollPosition (handler) {
  const [handlers, setHadlers] = useState([])

  useEffect(() => {
    setHadlers([...handlers, handler])
  },
    []
  )

  useEffect(() => {
    if (handlers.length === 0) return

    const handlerScroll = () => {
      handlers.forEach(call => {
        call(window.scrollY)
      })
    }

    window.addEventListener('scroll', handlerScroll)

    return () => {
      setHadlers([])
      window.releaseEvents('scroll', handlerScroll)
    }
  }, [handlers])
}

export {
  useScrollPosition
}