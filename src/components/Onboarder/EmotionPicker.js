import React, { useState, useContext } from 'react'
import { EMOTIONS, COLORS } from 'config'

import { WizzardContext } from 'contexts/WizzardContext'
import WizzardPagination from 'components/Wizzard/WizzardPagination'
import SmartButton from 'components/SmartButton'

export default function EmotionPicker() {
  const {
    wizzardData: { trackedEmotions },
    handleWizzardData,
  } = useContext(WizzardContext)

  const [emotions, setEmotions] = useState(trackedEmotions ? trackedEmotions : [])
  const [customEmotion, setCustomEmotion] = useState({})
  const [colorIndex, setColorIndex] = useState(0)
  const [feedback, setFeedback] = useState()

  const isInCollection = (collection, element) =>
    collection && collection.length && collection.filter(elem => elem.name === element.name).length

  const addCustomEmotion = event => {
    setFeedback(null)

    const {
      currentTarget: { value },
      key,
    } = event

    if (!value) return false

    setCustomEmotion({ id: `userEmotion_${Date.now()}`, name: value, color: COLORS[colorIndex] })

    if (key === 'Enter') {
      if (isInCollection(EMOTIONS, customEmotion)) {
        setCustomEmotion({ name: '' })
        return setFeedback('already in emotions')
      }
      setEmotions([...emotions, customEmotion])
      EMOTIONS.push(customEmotion)
      setColorIndex(colorIndex + 1)
      setCustomEmotion({ name: '' })
    }
  }

  const toggleEmotion = emotion => () => {
    if (isInCollection(emotions, emotion)) {
      return setEmotions(emotions.filter(element => element.id !== emotion.id))
    }

    emotions && setEmotions([...emotions, emotion])
  }

  const storeEmotions = () => handleWizzardData({ trackedEmotions: emotions })

  const pagination = emotions.length ? <WizzardPagination onStepChange={storeEmotions} /> : null

  return (
    <div className="emotion-picker__container">
      <h2 className="wizzard__header--secondary">Select emotions to track</h2>
      <div className="emotion-picker">
        <div className="emotion-picker__emotions">
          {EMOTIONS.map((emotion, index) => {
            const { name, color } = emotion
            return (
              <SmartButton
                color={color}
                handleChange={toggleEmotion(emotion)}
                isChecked={isInCollection(emotions, emotion)}
                key={index}
                onClick={toggleEmotion(emotion)}
                text={name}
              />
            )
          })}
        </div>
        <h2 className="wizzard__header--secondary">or enter your own</h2>
        <input
          className="wizzard__input--text"
          onChange={addCustomEmotion}
          onKeyDown={addCustomEmotion}
          value={customEmotion.name}
        />
        {feedback}
        {pagination}
      </div>
    </div>
  )
}
