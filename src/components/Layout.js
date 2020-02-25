import React, { lazy, useContext } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../contexts/AppContext'

import '../App.sass'

const Toast = lazy(() => import('../components/Toast'))

export default function Layout({ children }) {
  const { screenMode, toast } = useContext(AppContext)

  return (
    <div className={`app__container ${screenMode}`}>
      <div className="app__container-inner">{children}</div>
      {toast && <Toast />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}
