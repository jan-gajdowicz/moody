import React, { useState } from 'react'
import { CartesianGrid, XAxis, Line, YAxis, Tooltip, LineChart } from 'recharts'
import { EMOTIONS } from '../config'

const MoodGraph = ({ moods }) => {
  const [filters, setFilters] = useState(EMOTIONS)

  const isInFilters = emotion => filters.includes(emotion)

  const filterEmotions = emotion => () => {
    if (isInFilters(emotion)) {
      return setFilters(filters.filter(filter => filter !== emotion))
    }
    setFilters([...filters, emotion])
  }
  return (
    <div className="mood-graph__container">
      <div className="mood-graph__filters">
        {JSON.stringify(filters)}
        {EMOTIONS.map((emotion, index) => {
          const { name, color } = emotion
          return (
            <div
              className="mood-graph__filter"
              key={index}
              style={{ border: `1px solid ${color}` }}
            >
              <input
                checked={isInFilters(emotion)}
                id={name}
                name={name}
                onChange={filterEmotions(emotion)}
                type="checkbox"
              />
              <label htmlFor={name}>{name}</label>
            </div>
          )
        })}
      </div>
      <LineChart data={moods} height={400} width={800}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="emotions.date" />
        <YAxis />
        <Tooltip />
        {filters.map(({ name, color }, index) => (
          <Line
            dataKey={`emotions.${name}`}
            key={index}
            stroke={color}
            strokeWidth={3}
            type="monotone"
          />
        ))}
      </LineChart>
    </div>
  )
}

export default MoodGraph
