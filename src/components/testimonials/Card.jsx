import React from 'react';
import './Card.scss'

const Card = ({name, picture, link, text, jobTitle, workplace}) => {
  return (
    <div className="card">
      <div className="top">
        <img src="assets/right-arrow.png" className="left" alt="right arrow"/>
        <img src={picture} className="user" alt="sheraz"/>
        <a href={link} target="_blank" rel='noreferrer'><img src="assets/linkedin.png" className="right"
                                                             alt="linkedin"/></a>
      </div>
      <div className="center">
        {text}
      </div>
      <div className="bottom">
        <h2>{name}</h2>
        <h4>{jobTitle}</h4>
        <h4 className="workplace">{workplace}</h4>
      </div>
    </div>
  );
};

export default Card;