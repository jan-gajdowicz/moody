import React from 'react'
import MoodInput from '../components/MoodInput'
import { EMOTIONS } from '../config'

const MoodLoggerForm = () => {
  return (
    <div className="mood-logger-form__container">
      {EMOTIONS.map((emotion, index) => <MoodInput emotion={emotion} key={index} />)}
    </div>
  )
}

export default MoodLoggerForm
