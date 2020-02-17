import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { EMOTIONS, buttonStyle } from 'config'

import SmartButton from 'components/SmartButton'

const GraphFilters = ({ updateFilters }) => {
  useEffect(() => updateFilters(filters))
  const [filters, setFilters] = useState(EMOTIONS)

  const isInFilters = emotion => filters.includes(emotion)

  const filterEmotions = emotion => () => {
    if (isInFilters(emotion)) {
      return setFilters(filters.filter(filter => filter !== emotion))
    }
    setFilters([...filters, emotion])
    updateFilters(filters)
  }
  return (
    <div className="graph-filters__container">
      <div className="graph-filters__filters">
        {EMOTIONS.map((emotion, index) => {
          const { name, color } = emotion
          return (
            <SmartButton
              color={color}
              handleChange={filterEmotions(emotion)}
              isChecked={isInFilters(emotion)}
              key={index}
              text={name}
            />
          )
        })}
      </div>
    </div>
  )
}

GraphFilters.propTypes = {
  updateFilters: PropTypes.func,
}

export default GraphFilters
