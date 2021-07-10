import React, { useState, useEffect } from 'react'

// firebase
import { cloudFirestore, PREFIX } from '../firebase/firebaseConfig'

// components/posts
import PostList from './posts/PostList'
import CreatePosts from './posts/CreatePosts'

// components
import Navbar from './Navbar'

// contexts
import { useUser } from '../contexts/UserProvider'

export default function Home() {
  const [posts, setPosts] = useState([])
  
  const { toggleAddPost, user } = useUser()
  
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
    <>
      <Navbar />
      <div className="container">

        <div className="row mt-3 justify-content-center">
          {
            toggleAddPost && user && (
              <div className="col-md-6 mb-3">
                <CreatePosts />
              </div>
            )
          }
          
          <div className={`${toggleAddPost ? 'col-md-6' : 'col-md-8'}`}>
            <div className="row justify-content-center">
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
        </div>
      </div>
    </>
  )
}
