import React, { useState } from 'react'

import EmotionMeter from '../components/EmotionMeter'
import TestCompleted from '../components/TestCompleted'

import { EMOTIONS, SCALE } from '../config'

const MoodLoggerForm = () => {
  const [activeInput, setActiveInput] = useState(0)
  const testIsCompleted = activeInput === SCALE.length - 2

  const handleInputChange = value => {
    setActiveInput(value)
  }
  if (testIsCompleted) {
    return <TestCompleted />
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
