import React, { useState, useEffect } from 'react'

// firebase
import { cloudFirestore, auth, PREFIX } from '../firebase/firebaseConfig'

// components
import PostList from './posts/PostList'

// contexts
// import { useUser } from '../contexts/UserProvider'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    cloudFirestore
      .collection(PREFIX + 'posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, post: doc.data() }
          })
        )
      })
  }, [setPosts])

  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8 col-lg-6 mb-3">
          <button className="btn btn-secondary" onClick={() => auth.signOut()}>
            <i className="fa fa-fw fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="row mt-3 justify-content-center">
        {posts.map(({ id, post }) => (
          <PostList
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
