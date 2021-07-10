import React from 'react'

export default function CardAuth({ children }) {
  return (
    <div className="container auth">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-8 auth__wrapper py-3">
          <div className="card shadow-lg w-100">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
