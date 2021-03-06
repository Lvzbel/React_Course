import React from 'react';
import{ NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Porfolio</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/porfolio' activeClassName='is-active' exact={true}>Porfolio</NavLink>
    <NavLink to='/contact' activeClassName='is-active' exact={true}>Contact</NavLink>
  </header>
);

export default Header;