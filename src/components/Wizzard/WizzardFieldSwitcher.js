import React from 'react'
import PropTypes from 'prop-types'

export default function WizzardFieldSwitcher(props) {
  const {
    step: { child },
    activeStep,
    order,
  } = props
  const module = require(`./../Onboarder/${child}`)
  const WizzardField = module.default
  const showField = activeStep === order

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
