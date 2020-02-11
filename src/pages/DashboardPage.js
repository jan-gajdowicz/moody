import React, { useState, useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'

import MoodLogger from './../components/MoodLogger'
import MoodGraph from '../components/MoodGraph'
import api from '../api'

const DashboardPage = () => {
  const [moods, setMoods] = useState([])

  const {
    appData: { showMoodLogger, someField },
    handleAppDataChange,
  } = useContext(AppContext)

  const handleButtonClick = () => handleAppDataChange({ showMoodLogger: true, someField: 'false' })

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
      <MoodGraph moods={moods} />
      {showMoodLogger && <MoodLogger />}
      <button onClick={handleButtonClick}>Log your mood</button>
    </div>
  )
}

export default DashboardPage
