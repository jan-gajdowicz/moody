import React from 'react'

import { EMOTIONS } from 'config'
import { insertMood } from 'api'

import { WizzardProvider } from 'contexts/WizzardContext'

import EmotionMeter from './EmotionMeter'
import Wizzard from './Wizzard'

export default function MoodLoggerForm() {
  const date = new Date().toISOString()
  const storeMood = emotions => {
    const mood = {
      date,
      user: '02',
      emotions,
    }
    insertMood(mood)
  }

  return (
    <WizzardProvider>
      <Wizzard child={EmotionMeter} mutation={storeMood} steps={EMOTIONS} />
    </WizzardProvider>
  )
}
