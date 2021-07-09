import React from 'react'
import { Link } from 'react-router-dom'

export default function CardFooter({ text, btnText, btnUrl }) {
  return (
    <p class="card-text small text-muted text-center">
      {text}&nbsp;
      <Link to={btnUrl}>{btnText}</Link>
    </p>
  )
}
