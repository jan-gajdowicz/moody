import React, { useState } from 'react'
import { EMOTIONS, COLORS, buttonStyle } from 'config'

export default function EmotionPicker(props) {
  const [emotions, setEmotions] = useState([])
  const [customEmotion, setCustomEmotion] = useState({})
  const [colorIndex, setColorIndex] = useState(0)
  const [feedback, setFeedback] = useState()
  const isInCollection = (collection, element) =>
    collection.length && collection.filter(elem => elem.name === element.name).length

  const addCustomEmotion = event => {
    setFeedback('')
    const {
      currentTarget: { value },
      key,
    } = event
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
    setEmotions([...emotions, emotion])
  }

  return (
    <div className="emotion-picker__container">
      <h2 className="wizzard__header--secondary">Please select emotions you wish to track</h2>
      <div className="emotion-picker__emotions">
        {EMOTIONS.map((emotion, index) => {
          const { name, color } = emotion
          const style = buttonStyle(isInCollection(emotions, emotion), color)

          return (
            <label className="graph-filters__filter" htmlFor={name} key={index} style={style}>
              <input
                checked={isInCollection(emotions, emotion)}
                className="graph-filters__input"
                id={name}
                name={name}
                onChange={toggleEmotion(emotion)}
                type="checkbox"
              />
              {name}
            </label>
          )
        })}
        <h2 className="wizzard__header--secondary">or enter your own</h2>
        <input
          className="wizzard__input--text"
          onChange={addCustomEmotion}
          onKeyDown={addCustomEmotion}
          value={customEmotion.name}
        />
        <button className="wizzard__button" onClick={addCustomEmotion}>
          Add
        </button>
        {feedback}
      </div>
    </div>
  )
}
