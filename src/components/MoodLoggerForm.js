import React, { useState } from 'react'

import MoodInput from '../components/MoodInput'
import { EMOTIONS } from '../config'

const MoodLoggerForm = () => {
  const [activeInput, setActiveInput] = useState(0)
  const handleInputChange = value => {
    setActiveInput(value)
  }

  return (
    <div className="mood-logger-form__container">
      {EMOTIONS.map((emotion, index) => (
        <MoodInput
          activeInput={activeInput}
          emotion={emotion}
          index={index}
          key={index}
          setActiveInput={handleInputChange}
        />
      ))}
    </div>
  )
}

export default MoodLoggerForm
