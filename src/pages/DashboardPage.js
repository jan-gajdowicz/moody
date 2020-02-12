import React, { useState, useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'
import api from '../api'

import MoodLogger from './../components/MoodLogger'
import MoodGraph from '../components/MoodGraph'
import GraphFilters from '../components/GraphFilters'
import NavHeader from '../components/NavHeader'

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
    <>
      <NavHeader />
      <div className="dashboard__container">
        <GraphFilters updateFilters={updateFilters} />
        <MoodGraph filters={filters} moods={moods} />
        {showMoodLogger && <MoodLogger />}
      </div>
    </>
  )
}

export default DashboardPage
