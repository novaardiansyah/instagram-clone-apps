import React from 'react'
// components
import Posts from './Posts'

export default function Home() {
  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        <Posts
          username={`user_${Math.floor(Math.random() * 100)}`}
          imageUrl="https://source.unsplash.com/640x426/?girls"
          captions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi."
        />
        <Posts
          username={`user_${Math.floor(Math.random() * 100)}`}
          imageUrl="https://source.unsplash.com/640x426/?games"
          captions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi."
        />
        <Posts
          username={`user_${Math.floor(Math.random() * 100)}`}
          imageUrl="https://source.unsplash.com/640x426/?computer"
          captions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi."
        />
        <Posts
          username={`user_${Math.floor(Math.random() * 100)}`}
          imageUrl="https://source.unsplash.com/640x426/?kids"
          captions="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ex excepturi architecto minus ipsa quasi."
        />
      </div>
    </div>
  )
}
