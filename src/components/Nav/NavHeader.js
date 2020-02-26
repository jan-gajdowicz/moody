import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ScreenModeSwitcher from './ScreenModeSwitcher'

import { AppContext } from 'contexts/AppContext'

const NavHeader = () => {
  const { handleWizzard } = useContext(AppContext)

  const handleButton = () => handleWizzard(true)

  return (
    <div className="nav-header__container">
      <div className="nav-header">
        <div className="nav-header__logo">
          <Link className="nav-header__link" to="/">
            moody
          </Link>
        </div>
        <div className="nav-header__tools">
          <ScreenModeSwitcher classProp="nav-header__button" />
          <div className="nav-header__button" onClick={handleButton}>
            Log your mood
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
