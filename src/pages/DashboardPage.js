import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../contexts/AppContext'

import api from '../api'

const DashboardPage = () => {
  const {
    appData: { some },
  } = useContext(AppContext)
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
      {some}
      <Link to="/mood-logger">
        <button className="button-cta">Log your mood</button>
      </Link>
    </div>
  )
}

export default DashboardPage
