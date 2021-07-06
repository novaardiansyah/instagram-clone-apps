import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'
import Home from '../components/Home'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
