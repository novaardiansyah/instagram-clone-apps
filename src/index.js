import React from 'react'
import ReactDOM from 'react-dom'
import App from './router/App'

// contexts
import UserProvider from './contexts/UserProvider'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// main style
import './assets/scss/app.scss'

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
)
