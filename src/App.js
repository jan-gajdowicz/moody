import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Loader from './components/Loader'
import { AppDataProvider } from './contexts/AppContext'

import './App.sass'

const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))

function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/welcome">
                <WelcomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/dashboard">
                <DashboardPage />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </AppDataProvider>
  )
}

export default App
