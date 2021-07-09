import React, { useState, useEffect } from 'react'
// import firebase from 'firebase'
import { cloudFirestore, PREFIX } from '../firebase/firebaseConfig'

// components
import Posts from './posts'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    cloudFirestore
      .collection(PREFIX + 'posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => {
          return { id: doc.id, post: doc.data() }
        }))
      })
  }, [setPosts])
  
  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        {posts.map(({id, post}) => (
          <Posts
            key={id}
            username={post?.username}
            images={post?.images}
            caption={post?.caption}
          />
        ))}
      </div>
    </div>
  )
}
