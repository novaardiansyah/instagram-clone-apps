import React from 'react'

// images
import instagramTextLogo from '../../../assets/images/instagram_text_logo.png'

export default function CardHeader({ subtitle }) {
  return (
    <div className="text-center">
      <img src={instagramTextLogo} alt="instagram text logo" width="130" />

      <p className="card-text small text-muted">{subtitle}</p>
    </div>
  )
}
