import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { SCREEN_MODE } from '../config'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
  const initScreenMode = localStorage.getItem('screenMode')
    ? JSON.parse(localStorage.getItem('screenMode'))
    : SCREEN_MODE

  const [screenMode, setScreenMode] = useState(initScreenMode)
  const [showMoodLogger, toggleMoodLogger] = useState(true)

  const handleMoodLogger = state => toggleMoodLogger(state)
  const handleScreenMode = mode => {
    setScreenMode(mode)
    localStorage.setItem('screenMode', JSON.stringify(mode))
  }

  return (
    <AppContext.Provider value={{ showMoodLogger, screenMode, handleMoodLogger, handleScreenMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppDataProvider }

AppDataProvider.propTypes = {
  children: PropTypes.object,
}
