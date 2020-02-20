import React, { useContext, useEffect } from 'react'

import { AppContext } from 'contexts/AppContext'

export default function Toast() {
  const {
    toast: { message = 'Oh, hi! My name is Mr. Toast', lifespan = 3000 },
    handleToast,
  } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => handleToast(null, lifespan), lifespan)
  }, [])

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
