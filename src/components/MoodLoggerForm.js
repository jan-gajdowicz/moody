import React, { useState } from 'react'

import EmotionMeter from '../components/EmotionMeter'
import { EMOTIONS } from '../config'

const MoodLoggerForm = () => {
  const [activeInput, setActiveInput] = useState(0)
  const handleInputChange = value => {
    setActiveInput(value)
  }

  return (
    <div className="mood-logger-form__container">
      {EMOTIONS.map((emotion, index) => (
        <EmotionMeter
          activeInput={activeInput}
          emotion={emotion}
          key={index}
          order={index}
          setActiveInput={handleInputChange}
        />
      ))}
    </div>
  )
}

export default MoodLoggerForm
