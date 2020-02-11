import React from 'react'
import { CartesianGrid, XAxis, Line, YAxis, Tooltip, LineChart } from 'recharts'

const MoodGraph = ({ moods }) => {
  return (
    <div className="mood-graph__container">
      <div>
        <LineChart data={moods} height={400} width={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="emotions.date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="emotions.energy" stroke="#8884d8" strokeWidth={3} type="monotone" />
          <Line dataKey="emotions.anxiety" stroke="#82ca9d" strokeWidth={3} type="monotone" />
          <Line dataKey="emotions.happiness" stroke="#ffc658" strokeWidth={3} type="monotone" />
        </LineChart>
      </div>
    </div>
  )
}

export default MoodGraph
