import { createContext } from 'react'

const StickyContext = createContext({
  stickyRef: null,
  onChangeSticky: () => {}
})

export {
  StickyContext
}