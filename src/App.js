import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Images from './components/Images';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import SingleImage from './components/SingleImage';

function App() {

  document.cookie = 'SameSite=None Secure';

  useEffect(() => {
    M.AutoInit();
  });

  const images = [
    {
      id: 1,
      name: 'nature-image',
      category: 'Nature',
      url: 'https://source.unsplash.com/random/1600x900?nature'
    },
    {
      id: 2,
      name: 'forest-image',
      category: 'Forest',
      url: 'https://source.unsplash.com/random/1600x900?forest'
    },
    {
      id: 3,
      name: 'rain-image',
      category: 'Rain',
      url: 'https://source.unsplash.com/random/1600x900?rain'
    },
    {
      id: 4,
      name: 'code-image',
      category: 'Code',
      url: 'https://source.unsplash.com/random/1600x900?javascript'
    }
  ]

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='images' element={<Images />} >
            <Route path='/' element={<Gallery images={images} />} />
            <Route path=':slug' element={<SingleImage images={images} />} />
          </Route>
          
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
