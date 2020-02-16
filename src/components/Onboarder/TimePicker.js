import React from 'react'
import WizzardPagination from 'components/Wizzard/WizzardPagination'

export default function TimePicker(props) {
  const {
    step: { name, showPagination },
  } = props
  const storeEmotions = () => console.log('s')
  return (
    <div className="time-picker__container">
      <h2 className="wizzard__header">{name}</h2>
      {showPagination && <WizzardPagination {...props} onStepChange={storeEmotions} />}
    </div>
  )
}
