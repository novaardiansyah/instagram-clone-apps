import React from 'react'

export default function ErrorMessage({ text }) {
  return (
    <div className="alert alert-danger alert__error-message mt-3" role="alert">
      <i className="fa fa-fw fa-exclamation-triangle me-2"></i>
      <p className="d-inline">{text}</p>
    </div>
  )
}
