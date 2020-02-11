import React, { useState, useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'
import api from '../api'

import MoodLogger from './../components/MoodLogger'
import MoodGraph from '../components/MoodGraph'
import GraphFilters from '../components/GraphFilters'

const DashboardPage = () => {
  const [moods, setMoods] = useState([])
  const [filters, setFilters] = useState([])

  const {
    appData: { showMoodLogger },
    handleAppDataChange,
  } = useContext(AppContext)

  const handleButtonClick = () => handleAppDataChange({ showMoodLogger: true, someField: 'false' })

  const updateFilters = filters => setFilters(filters)

  useEffect(
    () => {
      async function fetchMoods() {
        await api.getAllMoods().then(response => {
          setMoods(response.data.data)
        })
      }
      fetchMoods()
    },
    [showMoodLogger === false],
  )

  return (
    <div className="dashboard__container">
      <h1 className="dashboard__header">Dashboard</h1>
      <GraphFilters updateFilters={updateFilters} />
      <MoodGraph filters={filters} moods={moods} />
      {showMoodLogger && <MoodLogger />}
      <button onClick={handleButtonClick}>Log your mood</button>
    </div>
  )
}

export default DashboardPage
