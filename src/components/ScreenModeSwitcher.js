import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'

import { AppContext } from '../contexts/AppContext'

const ScreenModeSwitcher = ({ classProp }) => {
  const {
    appData: { screenMode },
    handleAppDataChange,
  } = useContext(AppContext)

  const handleScreenModeSwitch = mode => () => handleAppDataChange({ screenMode: mode })

  const Icon =
    screenMode === 'dark' ? (
      <SunIcon color="#a88ee6" size={16} />
    ) : (
      <MoonIcon color="#a88ee6" size={16} />
    )

  const oppoScreenMode = screenMode === 'dark' ? 'light' : 'dark'

  return (
    <>
      <div
        className={`screen-mode__switcher ${classProp}`}
        onClick={handleScreenModeSwitch(oppoScreenMode)}
      >
        {Icon}
      </div>
    </>
  )
}

ScreenModeSwitcher.propTypes = {
  classProp: PropTypes.string,
}

export default ScreenModeSwitcher
