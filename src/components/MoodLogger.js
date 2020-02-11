import React, { useState } from 'react'

import EmotionMeter from '../components/EmotionMeter'
import TestCompleted from '../components/TestCompleted'

import { EMOTIONS, SCALE } from '../config'
import { insertMood } from '../api'

const MoodLoggerForm = () => {
  const date = new Date().toISOString()
  const [emotions, setEmotions] = useState()
  const [activeInput, setActiveInput] = useState(0)
  const testIsCompleted = activeInput === SCALE.length - 2
  const mood = {
    date,
    user: '02',
    emotions,
  }

  const setEmotion = emotion => {
    setEmotions({ ...emotions, ...emotion })
  }

  const handleInputChange = value => {
    setActiveInput(value)
  }

  if (testIsCompleted) {
    insertMood(mood)
    return <TestCompleted />
  }

  return (
    <div className="mood-logger__container">
      <h1>Rate your emotions</h1>
      {EMOTIONS.map((emotion, index) => (
        <EmotionMeter
          activeInput={activeInput}
          emotion={emotion}
          key={index}
          order={index}
          setActiveInput={handleInputChange}
          setEmotion={setEmotion}
        />
      ))}
    </div>
  )
}

export default MoodLoggerForm
