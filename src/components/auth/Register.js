import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import './scss/auth.scss'

// firebase
import { auth } from '../../firebase/firebaseConfig'

// contexts
import { useUser } from '../../contexts/UserProvider'

// card
import CardAuth from './card/CardAuth'
import CardHeader from './card/CardHeader'
import CardFooter from './card/CardFooter'

export default function Register() {
  const { setUser } = useUser()
  const [errorMessage, setErrorMessage] = useState(null)
  
  const history = useHistory()
  
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleRegister = (e) => {
    e.preventDefault()

    try {
      if (confirmPasswordRef.current.value !== passwordRef.current.value) {
        throw new Error('Invalid confirmation password')
      }

      if (usernameRef.current.value < 6) {
        throw new Error('Username should be at least 6 characters')
      }
    } catch (error) {
      return setErrorMessage(error?.message)
    }

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: usernameRef.current.value,
        })

        console.log('successfully registered a new account', authUser)
        setErrorMessage(null)
        
        setUser(authUser)
        
        return history.push('/')
      })
      .catch((error) => {
        return setErrorMessage(error?.message)
      })
  }
  
  return (
    <div className="container auth">
      <div className="row justify-content-center">
        <CardAuth>
          <CardHeader text="sign up to start connecting with our community!" />

          <div
            className={`alert alert-danger alert__error-message mt-3 ${
              errorMessage ? '' : 'd-none'
            }`}
            role="alert"
          >
            <i className="fa fa-fw fa-exclamation-triangle me-2"></i>
            <p className="d-inline">{errorMessage}</p>
          </div>

          <form method="post" className="mt-3" onSubmit={handleRegister}>
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
    </div>
  )
}
