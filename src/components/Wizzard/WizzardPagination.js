import React from 'react'
import PropTypes from 'prop-types'

import { ONBOARD_STEPS } from 'config'

export default function WizzardPagination({ activeStep, setActiveStep }) {
  return (
    <div className="wizzard-pagination__container">
      <div className="wizzard-pagination">
        {activeStep !== 0 &&
          activeStep < ONBOARD_STEPS.length && (
            <button className="wizzard__button" onClick={() => setActiveStep(activeStep - 1)}>
              Prev step
            </button>
          )}
        {activeStep < ONBOARD_STEPS.length && (
          <button className="wizzard__button" onClick={() => setActiveStep(activeStep + 1)}>
            Next step
          </button>
        )}
      </div>
    </div>
  )
}

WizzardPagination.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
}
