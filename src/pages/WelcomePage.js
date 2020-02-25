import React, { Suspense, lazy } from 'react'

import Loader from 'components/Loader'

const Onboarder = lazy(() => import('components/Onboarder'))

export default function WelcomePage() {
  return (
    <div className="welcome-page__container">
      <h1 className="welcome-page__header">Hi, lets chat</h1>
      <Suspense fallback={<Loader />}>
        <Onboarder />
      </Suspense>
    </div>
  )
}
