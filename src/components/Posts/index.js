import React from 'react'
import '../../assets/scss/components/posts/index.scss'

// images
import defaultProfile from '../../assets/images/default-profile.png'

export default function Posts() {
  return (
    <div className="posts col-md-10 col-lg-8 mt-3">
      <div className="posts__header d-flex flex-row pt-3">
        <img
          className="posts__header-avatar rounded-circle me-2"
          src={defaultProfile}
          alt="default profile"
          width="32"
          height="32"
        />

        <p className="posts__header-username">Nova Ardiansyah</p>
      </div>
      <div className="posts__body">
        <img
          className="posts__body-image"
          src="https://source.unsplash.com/kZ1zThg6G40/640x426/"
          alt=""
        />
        
        <p className="posts__body-desc">
          <span className="fw-bold">Nova Ardiansyah:&nbsp;</span>
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  )
}
