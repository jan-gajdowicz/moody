import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import WizzardComplete from './WizzardComplete'
import Icon from 'components/Icon'
import { CloseIcon } from 'assets/icons/close'

import { PRIMARY_COLOR } from 'config'
import { AppContext } from 'contexts/AppContext'
import { WizzardProvider, WizzardContext } from 'contexts/WizzardContext'

export default function Wizzard({ steps, mutation, child }) {
  const { handleWizzard } = useContext(AppContext)

  const { currentStep } = useContext(WizzardContext)
  const { wizzardData } = useContext(WizzardContext)

  const wizzardComplete = currentStep === steps.length

  const handleCLose = () => handleWizzard(false)

  if (wizzardComplete) {
    mutation(wizzardData)
  }

  return (
    <div className="wizzard">
      <div className="wizzard__close" onClick={handleCLose}>
        <Icon color={PRIMARY_COLOR} path={CloseIcon} size={50} />
      </div>
      <div className="wizzard__container">
        {wizzardComplete && <WizzardComplete />}
        {steps.map((step, order) =>
          child({
            step,
            order,
          }),
        )}
      </div>
    </div>
  )
}

Wizzard.propTypes = {
  steps: PropTypes.array,
  child: PropTypes.func,
  mutation: PropTypes.func,
}
