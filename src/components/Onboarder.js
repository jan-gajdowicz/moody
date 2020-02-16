import React, { useContext } from 'react'

import { AppContext } from 'contexts/AppContext'
import Wizzard from 'components/Wizzard'
import WizzardFieldSwitcher from 'components/Wizzard/WizzardFieldSwitcher'
import { ONBOARD_STEPS } from 'config'

export default function Onboarder() {
  const { showWizzard } = useContext(AppContext)
  const storeUserConfig = config => console.log(config)
  return (
    <div className="onboarder__container">
      <div className="onboarder">
        {showWizzard && (
          <Wizzard child={WizzardFieldSwitcher} mutation={storeUserConfig} steps={ONBOARD_STEPS} />
        )}
      </div>
    </div>
  )
}
