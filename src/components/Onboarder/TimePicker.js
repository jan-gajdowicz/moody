import React, { useState } from 'react'
import WizzardPagination from 'components/Wizzard/WizzardPagination'

export default function TimePicker(props) {
  const [pagination, setPagination] = useState(false)
  const storeEmotions = () => console.log('s')
  return (
    <div className="time-picker__container">
      <h2 className="wizzard__header--secondary">When to log?</h2>
      {pagination && <WizzardPagination {...props} onStepChange={storeEmotions} />}
    </div>
  )
}
