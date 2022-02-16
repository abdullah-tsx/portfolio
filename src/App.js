import Menu from 'components/menu/Menu';
import Portfolio from 'components/portfolio/Portfolio';
import Topbar from 'components/topbar/Topbar'
import React, { useState } from 'react'
import './App.scss';
import Intro from './components/intro/Intro';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Topbar isMenuOpen={isMenuOpen} onOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} onOpen={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
      </div>
    </div>
  )
}

export default App