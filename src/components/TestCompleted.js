import React, { useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'

const TestComplete = () => {
  const { handleMoodLogger } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => handleMoodLogger(false), 2000)
  }, [])

  return (
    <div className="mood-logger">
      <div className="mood-logger__container">
        <h1 className="mood-logger__header">Thank you</h1>
      </div>
    </div>
  )
}

export default TestComplete
