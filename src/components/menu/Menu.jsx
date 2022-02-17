import MenuItem from './MenuItem';
import React, { useEffect, useState } from 'react'
import './Menu.scss';
import { getResume } from 'helper/api';

const Menu = ({ isMenuOpen, onOpen, resume }) => {

  return (
    <div className={`menu ${isMenuOpen && 'open'}`}>
      <ul>
        <MenuItem link="#intro" text="Home" onOpen={onOpen} isResume={false} />
        <MenuItem link="#portfolio" text="Projects" onOpen={onOpen} isResume={false} />
        <MenuItem link="#work" text="Work" onOpen={onOpen} isResume={false} />
        <MenuItem link="#testimonial" text="Testimonials" onOpen={onOpen} isResume={false} />
        <MenuItem link="#contact" text="Contact Me" onOpen={onOpen} isResume={false} />
        <MenuItem link={resume} text="Resume" onOpen={onOpen} isResume={true} />
      </ul>
    </div>
  )
}

export default Menu