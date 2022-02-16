import React from 'react'
import './MenuItem.scss';

const MenuItem = ({ link, text, onOpen: setIsMenuOpen }) => {
  return (
    <li><a href={link} onClick={() => { setIsMenuOpen(prev => !prev) }}>{text}</a></li>
  )
}

export default MenuItem;