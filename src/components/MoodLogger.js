import React, { useState, useContext } from 'react'

import EmotionMeter from './EmotionMeter'
import TestCompleted from './TestCompleted'
import Icon from './Icon'
import { CloseIcon } from '../assets/icons/close'

import { EMOTIONS, SCALE, PRIMARY_COLOR } from '../config'
import { insertMood } from '../api'
import { AppContext } from '../contexts/AppContext'

export default function MoodLoggerForm() {
  const date = new Date().toISOString()
  const [emotions, setEmotions] = useState()
  const [activeInput, setActiveInput] = useState(0)
  const testComplete = activeInput === SCALE.length - 2
  const mood = {
    date,
    user: '02',
    emotions,
  }

  const { handleMoodLogger } = useContext(AppContext)

  const setEmotion = emotion => {
    setEmotions({ ...emotions, ...emotion })
  }

  const handleInputChange = value => {
    setActiveInput(value)
  }

  const handleCLose = () => handleMoodLogger(false)

  if (testComplete) {
    insertMood(mood)
    return <TestCompleted />
  }

  return (
    <div className="mood-logger">
      <div className="mood-logger__close" onClick={handleCLose}>
        <Icon color={PRIMARY_COLOR} path={CloseIcon} size={50} />
      </div>
      <div className="mood-logger__container">
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
    </div>
  )
}
