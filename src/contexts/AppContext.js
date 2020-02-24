import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { SCREEN_MODE, SHOW_WIZZARD } from '../config'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
  const initScreenMode = localStorage.getItem('screenMode')
    ? JSON.parse(localStorage.getItem('screenMode'))
    : SCREEN_MODE

  const [screenMode, setScreenMode] = useState(initScreenMode)
  const [showWizzard, toggleWizzard] = useState(SHOW_WIZZARD)
  const [toast, toggleToast] = useState(false)

  const handleWizzard = state => toggleWizzard(state)
  const handleToast = (message, lifespan) => {
    if (!message) {
      toggleToast(null, 0)
    }
    toggleToast({ message, lifespan })
  }

  const handleScreenMode = mode => {
    setScreenMode(mode)
    localStorage.setItem('screenMode', JSON.stringify(mode))
  }

  return (
    <AppContext.Provider
      value={{
        handleToast,
        showWizzard,
        toast,
        screenMode,
        handleWizzard,
        handleScreenMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppDataProvider }

AppDataProvider.propTypes = {
  children: PropTypes.object,
}
