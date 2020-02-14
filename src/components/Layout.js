import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../contexts/AppContext'

import '../App.sass'

export default function Layout({ children }) {
  const { screenMode } = useContext(AppContext)

  return (
    <div className={`app__container ${screenMode}`}>
      <div className="app__container-inner">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}
