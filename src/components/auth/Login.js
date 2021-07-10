import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import './scss/auth.scss'

// firebase
import { auth } from '../../firebase/firebaseConfig'

// contexts
import { useUser } from '../../contexts/UserProvider'

// cards
import CardAuth from './cards/CardAuth'
import CardHeader from './cards/CardHeader'
import CardFooter from './cards/CardFooter'

// alerts
import ErrorMessage from './alerts/ErrorMessage'

export default function Login() {
  const { errorMessage, setErrorMessage, setUser } = useUser()
  
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const history = useHistory()
  
  const handleLogin = (e) => {
    e.preventDefault()
    
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log('the login process is running successfully', authUser)
        setErrorMessage(null)

        setUser(authUser)
        return history.push('/')
      })
      .catch((error) => {
        return setErrorMessage(error?.message)
      })
  }

  return (
    <CardAuth>
      <CardHeader text="welcome back insta, please login first." />
      
      { errorMessage && <ErrorMessage text={errorMessage} /> }
      
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
  )
}
