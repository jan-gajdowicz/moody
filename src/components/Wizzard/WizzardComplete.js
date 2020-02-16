import React, { useEffect, useContext } from 'react'

import { AppContext } from 'contexts/AppContext'

export default function WizzardComplete() {
  const { handleWizzard } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => handleWizzard(false), 2000)
  }, [])

  return <h1 className="mood-logger__header">Thank you</h1>
}
