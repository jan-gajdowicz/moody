import React, { useState } from 'react'
import { CartesianGrid, XAxis, Line, YAxis, Tooltip, LineChart } from 'recharts'
import { EMOTIONS } from '../config'

const MoodGraph = ({ moods }) => {
  const [filteredEmotions, setFilteredEmotions] = useState([])

  const filterEmotions = name => () => {
    const filtered = EMOTIONS.filter(emotion => emotion.name === name)
    setFilteredEmotions(filtered)
  }
  return (
    <div className="mood-graph__container">
      <div className="mood-graph__filters">
        {EMOTIONS.map(({ name, color }, index) => (
          <div className="mood-graph__filter" key={index} style={{ border: `1px solid ${color}` }}>
            <input checked id={name} name={name} onChange={filterEmotions(name)} type="checkbox" />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </div>
      <LineChart data={moods} height={400} width={800}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="emotions.date" />
        <YAxis />
        <Tooltip />
        {filteredEmotions.map(({ name, color }, index) => (
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
