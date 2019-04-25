import * as React from 'react';

import './App.css';
import { NavbarComp } from './components/NavbarComp'
import { CarouselComp } from './components/CarouselComp'
import { ButtonComp } from './components/ButtonComp'
import { FooterComp } from './components/FooterComp'

function App() {
  return (
    <div>
      <NavbarComp/>
      <CarouselComp />
      <ButtonComp />
      <FooterComp />
    </div>
  );
}

export default App;
