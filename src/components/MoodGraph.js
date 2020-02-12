import React from 'react'
import PropTypes from 'prop-types'
import { CartesianGrid, XAxis, Area, AreaChart, Tooltip, ResponsiveContainer } from 'recharts'

const MoodGraph = ({ scopedMoods, filters }) => {
  return (
    <div className="mood-graph__container">
      <ResponsiveContainer aspect={10.0 / 3.0} width="100%">
        <AreaChart data={scopedMoods}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <Tooltip />
          <defs>
            {filters.map(({ color }, index) => (
              <linearGradient id={color} key={index} x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          {filters.map(({ name, color }, index) => (
            <Area
              dataKey={`emotions.${name}`}
              fill={`url(#${color})`}
              fillOpacity={1}
              isAnimationActive={false}
              key={index}
              name={name}
              stroke={color}
              strokeWidth={2}
              type="monotone"
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

MoodGraph.propTypes = {
  scopedMoods: PropTypes.array,
  filters: PropTypes.array,
}

export default MoodGraph
