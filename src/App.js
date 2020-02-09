import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MoodLogger from './pages/MoodLogger'

import './App.sass'

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <DashboardPage />
          </Route>
          <Route exact path="/mood-logger">
            <MoodLogger />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
