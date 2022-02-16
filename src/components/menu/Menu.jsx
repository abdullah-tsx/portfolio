import MenuItem from './MenuItem';
import React from 'react'
import './Menu.scss';

const Menu = ({ isMenuOpen, onOpen }) => {
  return (
    <div className={`menu ${isMenuOpen && 'open'}`}>
      <ul>
        <MenuItem link="#intro" text="Home" onOpen={onOpen} />
        <MenuItem link="#portfolio" text="Portfolio" onOpen={onOpen} />
        <MenuItem link="#work" text="Work" onOpen={onOpen} />
        <MenuItem link="#testimonial" text="Testimonials" onOpen={onOpen} />
        <MenuItem link="#contact" text="Contact Me" onOpen={onOpen} />
      </ul>
    </div>
  )
}

export default Menu