import { useState } from 'react'
import ControlledCarousel from './carousel';
import NavBar from './Navbar';

function HomePage() {

  return (
    <>
    <NavBar/>
    <div id="homepage-style">
        <h1 data-testid="homepage-welcome-message">Home Page</h1>
        <ControlledCarousel/>
    </div>
    </>
  )
}

export default HomePage