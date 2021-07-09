import React, { useRef } from 'react'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'
import CardFooter from './card/CardFooter'

export default function Register() {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container pt-3 pb-5">
      <CardAuth>
        <CardHeader text="sign up to start connecting with our community!" />

        <form method="post" className="mt-3" onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="email address"
              ref={emailRef}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="username"
              ref={usernameRef}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              ref={passwordRef}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              ref={confirmPasswordRef}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-3">
            <i className="fa fa-fw fa-paper-plane"></i>
            register
          </button>
        </form>

        <CardFooter
          text="already have an account?"
          btnText="login here"
          btnUrl="/auth/login"
        />
      </CardAuth>
    </div>
  )
}
