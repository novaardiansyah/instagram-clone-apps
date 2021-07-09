import React, { useRef } from 'react'
import './scss/auth.scss'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'
import CardFooter from './card/CardFooter'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const handleLogin = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="container auth">
      <div className="row justify-content-center">
        <CardAuth>
          <CardHeader text="welcome back insta, please login first." />
  
          <form method="post" className="mt-3" onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="email address"
                autoFocus="on"
                ref={emailRef}
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
  
            <button type="submit" className="btn btn-primary mb-3">
              <i className="fa fa-fw fa-paper-plane"></i>
              Login
            </button>
          </form>
  
          <CardFooter
            text="don't have an account?"
            btnText="sign up here"
            btnUrl="/auth/register"
          />
        </CardAuth>
      </div>
    </div>
  )
}
