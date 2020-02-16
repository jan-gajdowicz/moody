import React from 'react'
import PropTypes from 'prop-types'

export default function WizzardFieldSwitcher(props) {
  const {
    step: { child },
  } = props
  const module = require(`./../Onboarder/${child}`)
  const WizzardField = module.default
  return <WizzardField {...props} />
}

WizzardFieldSwitcher.propTypes = {
  child: PropTypes.string,
}
