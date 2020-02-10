import React, { useEffect, useState } from 'react'

const TestCompleted = () => {
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    setTimeout(() => setVisibility(false), 2000)
  }, [])
  return (
    <>
      {visibility && (
        <div className="test-complted__container">
          <h2 className="test-completed__header">Thanks!</h2>
        </div>
      )}
    </>
  )
}

export default TestCompleted
