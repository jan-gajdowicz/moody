import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../contexts/AppContext'
import Toast from '../components/Toast'

import '../App.sass'

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
