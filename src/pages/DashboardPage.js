import React, { useState, useEffect } from 'react'
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
    console.log(moods)
  }, [])
  return (
    <div className="dashboard__container">
      <h1 className="dashboard__header">Dashboard</h1>
      {JSON.stringify(moods)}
    </div>
  )
}

export default DashboardPage
