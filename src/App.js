import {Backdrop, CircularProgress} from '@mui/material';
import Menu from 'components/menu/Menu';
import Portfolio from 'components/portfolio/Portfolio';
import Topbar from 'components/topbar/Topbar'
import {getInfo} from 'helper/api';
import React, {useEffect, useState} from 'react'
import './App.scss';
import Intro from './components/intro/Intro';
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

const App = () => {
  const [info, setInfo] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    (async () => {
      setLoadingData(true);
      setInfo(await getInfo());
      setLoadingData(false);
    })();
  }, []);

  return <>
    <Backdrop
      sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={loadingData}
    >
      <CircularProgress color="inherit"/>
    </Backdrop>
    <div className='app'>
      <Topbar isMenuOpen={isMenuOpen} onOpen={setIsMenuOpen} info={info}/>
      <Menu isMenuOpen={isMenuOpen} onOpen={setIsMenuOpen} resume={info.resume}/>
      <div className="sections">
        <Intro name={info.name} skills={info.skills}/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  </>
}

export default App