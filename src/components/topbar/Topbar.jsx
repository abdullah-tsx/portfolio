import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './Topbar.scss';
import TopbarItem from "./TopbarItem";

const Topbar = ({isMenuOpen, onOpen: setIsMenuOpen, info}) => {

  return (
    <div className={`topbar ${isMenuOpen && 'open'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            abdullah.
          </a>
          <TopbarItem link={`https://wa.me/${info?.phone?.replace(/ /g, "")}`} text={info?.phone} Icon={PersonIcon}/>
          <TopbarItem link={`mailto:${info?.email}`} text={info?.email} Icon={EmailIcon}/>
          <TopbarItem link={info?.linkedin} text={'LinkedIn'} Icon={LinkedInIcon}/>
          <TopbarItem link={info?.github} text={'Github'} Icon={GitHubIcon}/>

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