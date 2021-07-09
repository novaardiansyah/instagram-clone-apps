import React from 'react'
import './scss/PostList.scss'

export default function PostList({ username, images, caption }) {
  return (
    <div className="post col-md-8 col-lg-6 mb-3">
      <div className="post__header d-flex flex-row pt-3">
        <img
          className="post__header-avatar rounded-circle me-2"
          src="https://source.unsplash.com/427x427/?kids,boys"
          alt="default profile"
          width="32"
          height="32"
        />

        <p className="post__header-username">{ username }</p>
      </div>
      <div className="post__body">
        <img
          className="post__body-image"
          src={ images }
          alt=""
        />
        
        <p className="post__body-desc mt-2">
          <span className="fw-bold">{ username }:&nbsp;</span>
          { caption }
        </p>
      </div>
    </div>
  )
}
