import React, { useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'

const TestCompleted = () => {
  const { handleAppDataChange } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => handleAppDataChange({ showMoodLogger: false }), 2000)
  }, [])

  return (
    <div className="mood-logger__container">
      <h2 className="test-completed__header">Thanks!</h2>
    </div>
  )
}

export default TestCompleted
