import React from 'react'
import MoodLoggerForm from '../components/MoodLoggerForm'

const MoodLogger = () => {
  return (
    <div className="mood-logger__container">
      <h1 className="mood-logger__header">How are you today</h1>
      <MoodLoggerForm />
    </div>
  )
}

export default MoodLogger
