import React from 'react'
import '../assets/scss/components/Navbar.scss'

// images
import defaultProfile from '../assets/images/default-profile.png'
import instagramTextLogo from '../assets/images/instagram_text_logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light py-2">
      <div className="container d-flex justify-space-between">
        <img
          src={instagramTextLogo}
          alt="instagram text logo"
          className="navbar__brand-image"
        />
        <img
          src={defaultProfile}
          alt="default profile"
          width="32"
          height="32"
          className="rounded-circle shadow-md"
        />
      </div>
    </nav>
  )
}
