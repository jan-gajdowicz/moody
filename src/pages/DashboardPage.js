import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../api'

const DashboardPage = () => {
  const [moods, setMoods] = useState([])
  useEffect(() => {
    async function fetchMoods() {
      await api.getAllMoods().then(response => {
        setMoods(response.data.data)
      })
    }
    fetchMoods()
  }, [])
  return (
    <div className="dashboard__container">
      <h1 className="dashboard__header">Dashboard</h1>
      <Link to="/mood-logger">
        <button className="button-cta">Log your mood</button>
      </Link>
    </div>
  )
}

export default DashboardPage
