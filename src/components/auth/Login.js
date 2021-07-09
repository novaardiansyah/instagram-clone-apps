import React from 'react'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'

export default function Login() {
  return (
    <CardAuth>
      <CardHeader subtitle="welcome back insta, please login first." />

      <form method="post" className="mt-3">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <i className="fa fa-fw fa-paper-plane"></i>
          Login
        </button>
      </form>
    </CardAuth>
  )
}
