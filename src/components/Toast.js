import React, { useContext } from 'react'

import { AppContext } from 'contexts/AppContext'

export default function Toast() {
  const {
    toast: { message = 'Oh, hi! My name is Mr. Toast', lifespan = 3000 },
  } = useContext(AppContext)

  return (
    <>
      {message && (
        <div className="toast__container" style={{ animation: `toastify ${lifespan}ms both` }}>
          <div className="toast__message">{message}</div>
        </div>
      )}
    </>
  )
}
