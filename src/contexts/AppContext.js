import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
  const state = {
    showMoodLogger: false,
  }

  const [appData, setAppData] = useState(state)

  const handleAppDataChange = payload => {
    setAppData({ ...appData, ...payload })
  }

  return (
    <AppContext.Provider value={{ appData, handleAppDataChange }}>{children}</AppContext.Provider>
  )
}

export { AppContext, AppDataProvider }

AppDataProvider.propTypes = {
  children: PropTypes.object,
}
