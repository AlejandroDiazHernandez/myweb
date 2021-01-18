import React from 'react';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
