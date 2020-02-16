import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { WizzardContext } from 'contexts/WizzardContext'

export default function WizzardSteps({ steps, child }) {
  const { currentStep } = useContext(WizzardContext)
  const { wizzardData } = useContext(WizzardContext)

  return (
    <div className="wizzard__steps">
      {steps.map((step, order) =>
        child({
          step,
          order,
        }),
      )}
    </div>
  )
}

WizzardSteps.propTypes = {
  steps: PropTypes.array,
  child: PropTypes.func,
}
