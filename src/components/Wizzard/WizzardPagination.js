import React from 'react'
import PropTypes from 'prop-types'

import { ONBOARD_STEPS } from 'config'

export default function WizzardPagination({ activeStep, setActiveStep, onStepChange }) {
  const handleNext = () => {
    onStepChange()
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }
  return (
    <div className="wizzard-pagination__container">
      <div className="wizzard-pagination">
        {activeStep !== 0 &&
          activeStep < ONBOARD_STEPS.length && (
            <button className="wizzard__button" onClick={handlePrev}>
              Prev step
            </button>
          )}
        {activeStep < ONBOARD_STEPS.length && (
          <button className="wizzard__button" onClick={handleNext}>
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
