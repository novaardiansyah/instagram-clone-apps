import React, { useState, useRef } from 'react'

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  const captionRef = useRef()

  const handleUpload = (e) => {
    e.preventDefault()
  }
  
  const handleChooseImage = (e) => {
    if (e.target.files[0]) return setImage(e.target.files[0])
  }
  
  console.log(image)
  return (
    <div className="card shadow-md">
      <div className="card-header bg-primary text-white">
        <h5 className="d-inline fs-6">create a new post</h5>
      </div>
      <div className="card-body">
        <form method="post" onSubmit={handleUpload}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              image
            </label>
            <input type="file" onChange={handleChooseImage} id="image" className="form-control" />
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
