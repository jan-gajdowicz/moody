import React from 'react'
import PropTypes from 'prop-types'

import WizzardPagination from 'components/Wizzard/WizzardPagination'

export default function WizzardFieldSwitcher(props) {
  const {
    step: { child, showPagination },
    activeStep,
    order,
  } = props
  const module = require(`./../Onboarder/${child}`)
  const showField = activeStep === order
  const WizzardField = module.default
  return (
    <>
      {showField && (
        <div className="wizzard__field">
          <WizzardField {...props} />
          {showPagination && <WizzardPagination {...props} />}
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
