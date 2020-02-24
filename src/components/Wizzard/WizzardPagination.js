import React, { useContext } from 'react'

import { ONBOARD_STEPS } from 'config'
import { WizzardContext } from 'contexts/WizzardContext'

export default function WizzardPagination({ onStepChange }) {
  const { currentStep, handleStepChange } = useContext(WizzardContext)
  const handlePrev = () => {
    handleStepChange(currentStep - 1)
  }
  const handleNext = () => {
    onStepChange()
    handleStepChange(currentStep + 1)
  }
  return (
    <div className="wizzard-pagination__container">
      <div className="wizzard-pagination">
        {currentStep !== 0 &&
          currentStep < ONBOARD_STEPS.length && (
            <button className="wizzard__button" onClick={handlePrev}>
              Prev step
            </button>
          )}
        {currentStep < ONBOARD_STEPS.length && (
          <button className="wizzard__button" onClick={handleNext}>
            Next step
          </button>
        )}
      </div>
    </div>
  )
}
