import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  stickyRefs: new Map(),
  currentTitle: null
}

const noop = () => {}

const initialDispatch = {
  addStickyRef: noop,
  setCurrentTitle: noop
}

const initialSectionValues = {
  tobSentinelRef: null,
  bottomSentinelRef: null
}

const StickyStateContext = createContext(initialState)
const StickyDispatchContext = createContext(initialDispatch)
const StickySectionContext = createContext(initialSectionValues)

const ActionType = {
  addStickyRef: 'add sticky ref',
  setCurrentTitle: 'set current title'
}

function reducer (state, action) {
  const { type, payload } = action
  switch (type) {
    case ActionType.addStickyRef:
      const { topSentinelRef, bottomSentinelRef, stickyRef } = payload
      state.stickyRefs.set(topSentinelRef.current, stickyRef)
      state.stickyRefs.set(bottomSentinelRef.current, stickyRef)
      return Object.assign(state, {
        stickyRefs: state.stickyRefs
      })

    case ActionType.setCurrentTitle:
      return Object.assign(state, {
        currentTitle: payload.currentTitle
      })
    default:
      return state
  }
}

function useStickyState () {
  const context = useContext(StickyStateContext)
  return context;
}

function useStickyActions () {
  const context = useContext(StickyDispatchContext)
  return context;
}

function StickyProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addStickyRef = ( topSentinelRef, bottomSentinelRef, stickyRef ) =>
    dispatch({type: ActionType.addStickyRef, payload: { topSentinelRef, bottomSentinelRef, stickyRef }})

  const setCurrentTitle = currentTitle =>
    dispatch({type: ActionType.setCurrentTitle, payload: {currentTitle}})

  const actions = {
    addStickyRef,
    setCurrentTitle
  }

  return (
    <StickyStateContext.Provider value={state}>
      <StickyDispatchContext.Provider value={actions}>
        { children }
      </StickyDispatchContext.Provider>
    </StickyStateContext.Provider>
  )
}

export {
  StickyProvider,
  StickyStateContext,
  StickySectionContext,
  useStickyState,
  useStickyActions
}