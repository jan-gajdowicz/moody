import React from 'react'
import { Redirect } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Redirect to="/welcome" />
      <h1 className="homepage__header">Hi, I am Moody</h1>
      <h2 className="homepage__header-secondary">your personal mood monitor</h2>
    </div>
  )
}

export default Homepage
