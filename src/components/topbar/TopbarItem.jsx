import React from 'react';
import './TopbarItem.scss'

const TopbarItem = ({link, Icon, text}) => {
  return (
    <div className="itemContainer">
      <a href={link} target="_blank" rel="noreferrer">
        <Icon className="icon"/>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default TopbarItem;