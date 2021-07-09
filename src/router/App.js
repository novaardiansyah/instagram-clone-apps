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
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
      </Switch>
    </Router>
  )
}
