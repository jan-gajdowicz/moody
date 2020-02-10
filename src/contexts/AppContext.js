import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
  const data = {
    some: 'ddddd',
  }
  const [appData, setAppData] = useState(data)

  const handleAppDataChange = data => {
    setAppData(...data)
  }

  return (
    <AppContext.Provider value={{ appData, handleAppDataChange }}>{children}</AppContext.Provider>
  )
}

export { AppContext, AppDataProvider }

AppDataProvider.propTypes = {
  children: PropTypes.object,
}
