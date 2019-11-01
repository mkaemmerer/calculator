import React from 'react'

import './button.css'

const Button = ({ color, isActive, onClick, children }) => {
  const className = `button
    ${color === 'orange' ? 'button--orange' : ''}
    ${isActive           ? 'button--active' : ''}
  `
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
