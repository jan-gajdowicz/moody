import React from 'react'
import PropTypes from 'prop-types'

import { SCOPES } from 'config'

const GraphScope = ({ updateScope }) => {
  const handleScopeChange = event => {
    const {
      currentTarget: { value },
    } = event
    updateScope(value)
  }

  return (
    <div className="graph-scope__container">
      <div className="graph-scope">
        <select className="graph-scope__select" onChange={handleScopeChange}>
          {SCOPES.map(({ name, value }, index) => {
            return (
              <option className="graph-scope__option" key={index} value={value}>
                {name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

GraphScope.propTypes = {
  updateScope: PropTypes.func,
}

export default GraphScope
