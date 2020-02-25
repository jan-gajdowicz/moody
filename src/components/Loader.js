import React from 'react'

export default function Loader() {
  return (
    <div className="loader__container">
      <div className="loader__icon">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}
