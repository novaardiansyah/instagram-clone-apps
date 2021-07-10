import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './scss/Navbar.scss'

// contexts
import { useUser } from '../contexts/UserProvider'

// firebase
import { auth } from '../firebase/firebaseConfig'

// images
import instagramTextLogo from '../assets/images/instagram_text_logo.png'

export default function Navbar() {
  const { user, toggleAddPost, setToggleAddPost } = useUser()

  const history = useHistory()

  const handleLogout = () => {
    auth.signOut()
    return history.push('/auth/login')
  }

  return (
    <nav className="navbar navbar-light py-2">
      <div className="container d-flex justify-space-between">
        <Link to="/">
          <img
            src={instagramTextLogo}
            alt="instagram text logo"
            className="navbar__brand-image"
          />
        </Link>
        {user ? (
          <div className="d-flex justify-content-center">
            <p
              className="btn btn-link text-decoration-none text-dark me-md-2 px-0"
              onClick={handleLogout}
            >
              <i className="fa fa-fw fa-sign-out-alt me-1"></i>
              <span className="d-none d-md-inline">Logout</span>
            </p>

            <p
              className="btn btn-link text-decoration-none text-dark px-0"
              onClick={() => setToggleAddPost((prev) => !prev)}
            >
              {toggleAddPost ? (
                <i className="fa fa-fw fa-minus-square me-1"></i>
              ) : (
                <i className="fa fa-fw fa-plus-square me-1"></i>
              )}
              <span className="d-none d-md-inline">Post</span>
            </p>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-link text-decoration-none text-dark"
          >
            <i className="fa fa-fw fa-sign-in-alt me-1"></i>
            <span className="d-none d-md-inline">Login</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
