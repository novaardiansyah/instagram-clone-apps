import React from 'react'

export default function CardAuth({ children }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-md">
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  )
}
