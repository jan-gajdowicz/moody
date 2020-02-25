import React, { Suspense, lazy, useState, useEffect, useContext } from 'react'

import { AppContext } from '../contexts/AppContext'
import api from '../api'

import MoodGraph from 'components/MoodGraph'
import GraphFilters from 'components/Graph/GraphFilters'
import GraphScope from 'components/Graph/GraphScope'
import NavHeader from 'components/Nav/NavHeader'
import Loader from 'components/Loader'

import { DEFAULT_SCOPE } from '../config'

const MoodLogger = lazy(() => import('./../components/MoodLogger'))

const DashboardPage = () => {
  const sliceMoods = scope => {
    return scope ? moods.slice(Math.max(moods.length - scope, 0)) : moods
  }
  const [moods, setMoods] = useState([])
  const [filters, setFilters] = useState([])
  const [scopedMoods, setScopedMoods] = useState(sliceMoods(DEFAULT_SCOPE))

  const { showWizzard } = useContext(AppContext)

  const updateFilters = filters => setFilters(filters)
  const updateScope = scope => setScopedMoods(sliceMoods(scope))

  useEffect(() => {
    async function fetchMoods() {
      await api.getAllMoods().then(response => {
        setMoods(response.data.data)
      })
    }
    fetchMoods()
  }, [])

  useEffect(
    () => {
      setScopedMoods(sliceMoods(DEFAULT_SCOPE))
    },
    [moods],
  )

  return (
    <>
      <NavHeader />
      <div className="dashboard__container">
        <div className="dashboard__filters">
          <GraphFilters updateFilters={updateFilters} />
          <GraphScope updateScope={updateScope} />
        </div>
        <MoodGraph filters={filters} scopedMoods={scopedMoods} />
        {showWizzard && (
          <Suspense fallback={<Loader />}>
            <MoodLogger />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default DashboardPage
