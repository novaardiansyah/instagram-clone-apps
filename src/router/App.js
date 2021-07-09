import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Home from '../components/Home'
// components/auth
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}
