import * as React from 'react';

import './App.css';
import { NavbarComp } from './components/NavbarComp'
import { CarouselComp } from './components/CarouselComp'
import { ButtonComp } from './components/ButtonComp'


function App() {
  return (
    <div>
      <NavbarComp/>
      <CarouselComp />
      <ButtonComp />
    </div>
  );
}

export default App;
