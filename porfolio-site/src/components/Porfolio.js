import React from 'react';
import { Link } from 'react-router-dom';

const Porfolio = () => (
  <div>
    <h2>My Work</h2>
    <p>Checkout the fallowing things I've done:</p>
    <Link to='/porfolio/1'>Item One</Link>
    <Link to='/porfolio/2'>Item Two</Link>
  </div>
);

export default Porfolio;