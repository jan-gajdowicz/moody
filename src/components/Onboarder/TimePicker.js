import React, { useState, useContext } from 'react'

import { TRACKING_HOURS, PRIMARY_COLOR } from 'config'

import { WizzardContext } from 'contexts/WizzardContext'
import { AppContext } from 'contexts/AppContext'

import WizzardPagination from 'components/Wizzard/WizzardPagination'
import SmartButton from 'components/SmartButton'

export default function TimePicker() {
  const {
    wizzardData: { trackingTime },
    handleWizzardData,
  } = useContext(WizzardContext)

  const { handleToast } = useContext(AppContext)

  const [time, setTime] = useState(trackingTime ? trackingTime : null)
  const [customTime, setCustomTime] = useState('')
  const [colorIndex, setColorIndex] = useState(0)

  const timeFormat = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')

  const addCustomTime = event => {
    const {
      currentTarget: { value },
      key,
    } = event

    if (!value) return setCustomTime('')

    setCustomTime(value)

    const isRightTimeFormat = timeFormat.exec(value)

    if (key === 'Enter') {
      if (TRACKING_HOURS.indexOf(value) > 0) {
        handleToast('Time already exists', 3000)
        return setCustomTime('')
      }

      if (!isRightTimeFormat) {
        handleToast('Please enter time in a 24hr format (HH:MM)', 5000)
        return setCustomTime('')
      }

      TRACKING_HOURS.push(value)
      setColorIndex(colorIndex + 1)
      setTime(value)
      setCustomTime('')
    }
  }

  const toggleTime = hour => () => {
    setTime(hour)
  }

  const storeTime = () => handleWizzardData({ trackingTime: time })

  const pagination = time ? <WizzardPagination onStepChange={storeTime} /> : null

  return (
    <div className="emotion-picker__container">
      <h2 className="wizzard__header--secondary">Select best time to track</h2>
      <div className="emotion-picker">
        <div className="emotion-picker__emotions">
          {TRACKING_HOURS.map((hour, index) => {
            return (
              <SmartButton
                color={PRIMARY_COLOR}
                handleChange={toggleTime(hour)}
                isChecked={hour === time}
                key={index}
                onClick={toggleTime(hour)}
                text={hour}
              />
            )
          })}
        </div>
        <h2 className="wizzard__header--secondary">or enter your own</h2>
        <input
          className="wizzard__input--text"
          onChange={addCustomTime}
          onKeyDown={addCustomTime}
          placeholder="eg. 11:00"
          value={customTime}
        />
        {pagination}
      </div>
    </div>
  )
}
