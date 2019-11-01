import React from 'react'

import './button.css'

const Button = ({ color, onClick, children }) => {
  const className = `button
    ${color === 'orange' ? 'button--orange' : ''}
  `
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
