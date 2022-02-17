import React from 'react'
import './PortfolioList.scss';

const PortfolioList = ({ title, active, setSelected, itemId }) => {
  return (
    <li className={`portfolioList ${active && 'active'}`} onClick={() => { setSelected(itemId) }}>{title}</li>
  )
}

export default PortfolioList