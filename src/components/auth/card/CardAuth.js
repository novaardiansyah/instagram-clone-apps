import React from 'react'

export default function CardAuth({ children }) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-md-10">
          <div className="card shadow-md">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
