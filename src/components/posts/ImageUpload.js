import React, { useState, useRef } from 'react'

// firebase
import firebase from 'firebase'
import { storage, cloudFirestore, PREFIX } from '../../firebase/firebaseConfig'

// contexts
import { useUser } from '../../contexts/UserProvider'

export default function ImageUpload() {
  const [image, setImage] = useState('')
  const [progress, setProgress] = useState(0)

  const { user } = useUser()

  const captionRef = useRef()
  const imageRef = useRef()

  const handleUpload = (e) => {
    e.preventDefault()

    const uploadTaks = storage.ref(`${PREFIX}images/${image.name}`).put(image)

    uploadTaks.on(
      'state_changed',
      // progress function
      (snapshot) => {
        setProgress(() => {
          return Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
        })
      },
      // error function
      (error) => console.log(error.message),
      // complete function
      () => {
        storage
          .ref(PREFIX + 'images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // save the data to cloudFirestore
            cloudFirestore.collection(PREFIX + 'posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: captionRef.current.value,
              images: url,
              username: user?.displayName,
            })

            // reset form
            captionRef.current.value = ''
            setImage(null)
            imageRef.current.value = ''
            setProgress(0)
          })
      }
    )
  }

  const handleChooseImage = (e) => {
    if (e.target.files[0]) return setImage(e.target.files[0])
  }

  return (
    <div className="card shadow-md">
      <div className="card-header bg-primary text-white">
        <h5 className="d-inline fs-6">create a new post</h5>
      </div>
      <div className="card-body">
        {progress >= 1 && (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
        )}

        <form method="post" onSubmit={handleUpload}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              image
            </label>
            <input
              type="file"
              onChange={handleChooseImage}
              id="image"
              className="form-control"
              ref={imageRef}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="caption" className="form-label">
              caption
            </label>
            <textarea
              rows="5"
              id="caption"
              className="form-control"
              placeholder="tell us about your fun today"
              ref={captionRef}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fa fa-fw fa-paper-plane"></i>
            upload
          </button>
        </form>
      </div>
    </div>
  )
}
