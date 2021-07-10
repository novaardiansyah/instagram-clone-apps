import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Home from '../components/Home'

// components/auth
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

// contexts
import { useUser } from '../contexts/UserProvider'

export default function App() {
  const { user } = useUser()

  return (
    <Router>
      {user && <Navbar />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect path="*" to="/auth/login" />
      </Switch>
    </Router>
  )
}
