import React, { useContext } from 'react'
import ScreenModeSwitcher from './ScreenModeSwitcher'

import { AppContext } from '../contexts/AppContext'

const NavHeader = () => {
  const { handleAppDataChange } = useContext(AppContext)

  const handleButtonClick = () => handleAppDataChange({ showMoodLogger: true })

  return (
    <div className="nav-header__container">
      <div className="nav-header">
        <div className="nav-header__logo">moody.</div>
        <div className="nav-header__tools">
          <ScreenModeSwitcher classProp="nav-header__button" />
          <div className="nav-header__button" onClick={handleButtonClick}>
            Log your mood
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
