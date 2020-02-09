import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { SCALE } from '../config/index.js'

const MoodInput = ({ emotion }) => {
  const [value, setValue] = useState(0)
  const handleSliderChange = value => {
    setValue(value)
  }
  const min = SCALE[0]
  const max = SCALE.length - 1

  return (
    <div className="mood-input__container">
      <h2 className="mood-input__header">{emotion}</h2>
      <Slider labels={SCALE} max={max} min={min} onChange={handleSliderChange} value={value} />
    </div>
  )
}

export default MoodInput
