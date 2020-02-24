import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const WizzardContext = createContext()

const WizzardProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [wizzardData, updateWizzardData] = useState({})

  const handleStepChange = stepNumber => setCurrentStep(stepNumber)
  const handleWizzardData = data => {
    updateWizzardData({ ...wizzardData, ...data })
  }

  return (
    <WizzardContext.Provider
      value={{ currentStep, handleStepChange, wizzardData, handleWizzardData }}
    >
      {children}
    </WizzardContext.Provider>
  )
}

export { WizzardContext, WizzardProvider }

WizzardProvider.propTypes = {
  children: PropTypes.object,
}
