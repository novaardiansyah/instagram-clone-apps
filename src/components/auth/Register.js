import React from 'react'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'
import CardFooter from './card/CardFooter'

export default function Register() {
  return (
    <CardAuth>
      <CardHeader subtitle="sign up to start connecting with the outside world!" />

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
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          <i className="fa fa-fw fa-paper-plane"></i>
          register
        </button>
      </form>
      
      <CardFooter text="already have an account?" btnText="login here" btnUrl="/auth/login" />
    </CardAuth>
  )
}
