import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { EMOTIONS } from '../config'

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
          const style = isInFilters(emotion)
            ? {
                border: `2px solid ${color}`,
                color: `${color}`,
                background: `linear-gradient(${color} -900%, transparent 100%)`,
              }
            : {
                border: '2px solid #ccc',
                color: '#bbb',
                background: 'transparent',
              }
          return (
            <label className="graph-filters__filter" htmlFor={name} key={index} style={style}>
              <input
                checked={isInFilters(emotion)}
                className="graph-filters__input"
                id={name}
                name={name}
                onChange={filterEmotions(emotion)}
                type="checkbox"
              />
              {name}
            </label>
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
