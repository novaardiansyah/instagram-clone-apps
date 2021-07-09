import React from 'react'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'
import CardFooter from './card/CardFooter'

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

        <button type="submit" className="btn btn-primary mb-3">
          <i className="fa fa-fw fa-paper-plane"></i>
          Login
        </button>
      </form>
      
      <CardFooter text="don't have an account?" btnText="sign up here" btnUrl="/auth/register" />
    </CardAuth>
  )
}
