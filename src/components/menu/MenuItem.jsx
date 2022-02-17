import React from 'react'
import './MenuItem.scss';

const MenuItem = ({ link, text, onOpen: setIsMenuOpen, isResume }) => {
  return (
    isResume ? <li><a href={link} target="_blank" onClick={() => { setIsMenuOpen(prev => !prev) }} rel="noreferrer">{text}</a></li> :
      <li><a href={link} onClick={() => { setIsMenuOpen(prev => !prev) }}>{text}</a></li>
  )
}

export default MenuItem;