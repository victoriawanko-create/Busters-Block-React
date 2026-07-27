import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Nav.css";


function Nav() {
  return (
    <>
    <div className="nav__container">
      <img src={logo} className="logo" />
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/"  className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/movies" className="nav__link--primary">
              Movies
            </Link>
            </li>
          </ul>
        </div>
    </>
  
  )
}

export default Nav;
