import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { WizzardContext } from 'contexts/WizzardContext'

export default function WizzardFieldSwitcher(props) {
  const {
    step: { child },
    order,
  } = props
  const { currentStep } = useContext(WizzardContext)
  const module = require(`./../Onboarder/${child}`)
  const WizzardField = module.default
  const showField = currentStep === order

  return (
    <>
      {showField && (
        <div className="wizzard__field">
          <WizzardField {...props} />
        </div>
      )}
    </>
  )
}

WizzardFieldSwitcher.propTypes = {
  step: PropTypes.object,
  order: PropTypes.number,
  child: PropTypes.string,
  showPagination: PropTypes.bool,
  activeStep: PropTypes.number,
}
