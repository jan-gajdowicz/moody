import React, { useContext } from 'react'

import { WizzardProvider } from 'contexts/WizzardContext'
import { AppContext } from 'contexts/AppContext'
import Wizzard from 'components/Wizzard'
import WizzardFieldSwitcher from 'components/Wizzard/WizzardFieldSwitcher'
import { ONBOARD_STEPS } from 'config'

export default function Onboarder() {
  const { toggleWelcomePage, handleWizzard } = useContext(AppContext)
  const storeUserConfig = config => {
    console.log(config)
    toggleWelcomePage(false)
    handleWizzard(false)
  }
  return (
    <div className="onboarder__container">
      <div className="onboarder">
        <WizzardProvider>
          <Wizzard child={WizzardFieldSwitcher} mutation={storeUserConfig} steps={ONBOARD_STEPS} />
        </WizzardProvider>
      </div>
    </div>
  )
}
