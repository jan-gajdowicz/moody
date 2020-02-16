import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const WizzardContext = createContext()

const WizzardProvider = ({ children }) => {
  const [screenMode, setScreenMode] = useState()
  const [showWizzard, toggleWizzard] = useState(true)

  const handleWizzard = state => toggleWizzard(state)
  const handleScreenMode = mode => {
    setScreenMode(mode)
    localStorage.setItem('screenMode', JSON.stringify(mode))
  }

  return (
    <WizzardContext.Provider value={{ showWizzard, screenMode, handleWizzard, handleScreenMode }}>
      {children}
    </WizzardContext.Provider>
  )
}

export { WizzardContext, WizzardProvider }

WizzardProvider.propTypes = {
  children: PropTypes.object,
}
