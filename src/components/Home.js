import React, { useState, useEffect } from 'react'
// import firebase from 'firebase'
import { cloudFirestore, PREFIX } from '../firebase/firebaseConfig'

// components
import Posts from './Posts'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    cloudFirestore
      .collection(PREFIX + 'posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            const { username, images, caption, timestamp } = doc.data()

            return {
              id: doc.id,
              username,
              images,
              caption,
              timestamp,
            }
          })
        )
      })
  }, [setPosts])
  
  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        {posts.map((post) => (
          <Posts
            key={post?.id}
            username={post?.username}
            images={post?.images}
            caption={post?.caption}
          />
        ))}
      </div>
    </div>
  )
}
