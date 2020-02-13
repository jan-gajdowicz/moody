import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../contexts/AppContext'

import '../App.sass'

function Layout({ children }) {
  const {
    appData: { screenMode },
  } = useContext(AppContext)

  return <div className={`app__container ${screenMode}`}>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
