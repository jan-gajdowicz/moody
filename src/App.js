import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppDataProvider } from './contexts/AppContext'

import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import './App.sass'

function App() {
  return (
    <div className="app__container">
      <AppDataProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppDataProvider>
    </div>
  )
}

export default App
