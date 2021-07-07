import React, { useState } from 'react'

// components
import Posts from './Posts'

export default function Home() {
  const [posts, setPosts] = useState([
    {
      username: `user_${Math.floor(Math.random() * 100)}`,
      imageUrl: 'https://source.unsplash.com/640x426/?girls',
      profileUrl: 'https://source.unsplash.com/426x426/?boys',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi.',
    },
    {
      username: `user_${Math.floor(Math.random() * 100)}`,
      imageUrl: 'https://source.unsplash.com/640x426/?boys',
      profileUrl: 'https://source.unsplash.com/426x426/?girls',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi.',
    },
    {
      username: `user_${Math.floor(Math.random() * 100)}`,
      imageUrl: 'https://source.unsplash.com/640x426/?fashion',
      profileUrl: 'https://source.unsplash.com/426x426/?woman,man',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi.',
    },
  ])

  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        {posts.map((post) => (
          <Posts
            username={post.username}
            imageUrl={post.imageUrl}
            profileUrl={post.profileUrl}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  )
}
