import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Topbar.scss';

const Topbar = ({isMenuOpen, onOpen: setIsMenuOpen, info}) => {

  return (
    <div className={`topbar ${isMenuOpen && 'open'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            abdullah.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>{info.phone}</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>{info.email}</span>
          </div>
          <div className="itemContainer">
            <a href={info.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon className="icon"/>
              <span>Linkedin</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href={info.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="icon"/>
              <span>Github</span>
            </a>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setIsMenuOpen(prev => !prev)}>
            <span className="line1"/>
            <span className="line2"/>
            <span className="line3"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;