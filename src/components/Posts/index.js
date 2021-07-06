import React from 'react'
import '../../assets/scss/components/posts/index.scss'

// images
import defaultProfile from '../../assets/images/default-profile.png'

export default function Posts({ username, imageUrl, captions }) {
  return (
    <div className="posts col-md-8 col-lg-6 mb-3">
      <div className="posts__header d-flex flex-row pt-3">
        <img
          className="posts__header-avatar rounded-circle me-2"
          src={defaultProfile}
          alt="default profile"
          width="32"
          height="32"
        />

        <p className="posts__header-username">{ username }</p>
      </div>
      <div className="posts__body">
        <img
          className="posts__body-image"
          src={ imageUrl }
          alt=""
        />
        
        <p className="posts__body-desc mt-2">
          <span className="fw-bold">{ username }:&nbsp;</span>
          { captions }
        </p>
      </div>
    </div>
  )
}
