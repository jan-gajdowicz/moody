import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import { SunIcon } from 'assets/icons/sun'
import { MoonIcon } from 'assets/icons/moon'

import { AppContext } from 'contexts/AppContext'

const ScreenModeSwitcher = ({ classProp }) => {
  const { screenMode, handleScreenMode } = useContext(AppContext)

  const handleSwitcher = mode => () => handleScreenMode(mode)

  const iconPath = screenMode === '--dark' ? MoonIcon : SunIcon

  const oppoScreenMode = screenMode === '--dark' ? '--light' : '--dark'

  return (
    <>
      <div
        className={`screen-mode__switcher ${classProp}`}
        onClick={handleSwitcher(oppoScreenMode)}
      >
        <Icon color="#a88ee6" path={iconPath} size={16} />
      </div>
    </>
  )
}

ScreenModeSwitcher.propTypes = {
  classProp: PropTypes.string,
}

export default ScreenModeSwitcher
