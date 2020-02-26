import React, { useContext, Suspense, lazy } from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from 'contexts/AppContext'
import Loader from 'components/Loader'

const Onboarder = lazy(() => import('components/Onboarder'))

export default function WelcomePage() {
  const { showWelcomePage, showWizzard, handleWizzard } = useContext(AppContext)
  if (showWelcomePage) {
    handleWizzard(true)
  }
  return (
    <div className="welcome-page__container">
      <Suspense fallback={<Loader />}>
        {showWizzard && <Onboarder />}
        {!showWelcomePage && <Redirect to="/dashboard" />}
      </Suspense>
    </div>
  )
}
