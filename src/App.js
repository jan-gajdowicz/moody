import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppDataProvider } from './contexts/AppContext'

import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'

import './App.sass'

function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </AppDataProvider>
  )
}

export default App
