import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { SCREEN_MODE } from '../config'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
  const initScreenMode = localStorage.getItem('screenMode')
    ? JSON.parse(localStorage.getItem('screenMode'))
    : SCREEN_MODE

  const [screenMode, setScreenMode] = useState(initScreenMode)
  const [showWizzard, toggleWizzard] = useState(true)

  const handleWizzard = state => toggleWizzard(state)
  const handleScreenMode = mode => {
    setScreenMode(mode)
    localStorage.setItem('screenMode', JSON.stringify(mode))
  }

  return (
    <AppContext.Provider value={{ showWizzard, screenMode, handleWizzard, handleScreenMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppDataProvider }

AppDataProvider.propTypes = {
  children: PropTypes.object,
}
