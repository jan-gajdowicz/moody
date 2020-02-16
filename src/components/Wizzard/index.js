import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import WizzardComplete from './WizzardComplete'
import Icon from 'components/Icon'
import { CloseIcon } from 'assets/icons/close'

import { PRIMARY_COLOR } from 'config'
import { AppContext } from 'contexts/AppContext'
import { WizzardProvider } from 'contexts/WizzardContext'

export default function Wizzard({ steps, mutation, child }) {
  const [activeStep, setActiveStep] = useState(0)
  const [settings, saveSettings] = useState({})
  const wizzardComplete = activeStep === steps.length
  const { handleWizzard } = useContext(AppContext)

  const saveStep = (stepName, stepData) => {
    saveSettings({ ...settings, [stepName]: stepData })
  }

  const handleStepChange = value => {
    setActiveStep(value)
  }

  const handleCLose = () => handleWizzard(false)

  if (wizzardComplete) {
    mutation(settings)
  }

  return (
    <WizzardProvider>
      <div className="wizzard">
        <div className="wizzard__close" onClick={handleCLose}>
          <Icon color={PRIMARY_COLOR} path={CloseIcon} size={50} />
        </div>
        <div className="wizzard__container">
          {wizzardComplete && <WizzardComplete />}
          {steps.map((step, order) =>
            child({
              handleStepChange,
              mutation,
              step,
              activeStep,
              saveStep,
              setActiveStep,
              order,
            }),
          )}
        </div>
      </div>
    </WizzardProvider>
  )
}

Wizzard.propTypes = {
  steps: PropTypes.array,
  child: PropTypes.func,
  mutation: PropTypes.func,
}
