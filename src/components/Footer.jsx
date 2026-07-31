import React from 'react'
import "./Footer.css";
import footerLogo from "../assets/logo.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <section className="footer">
      <div className="container">
      <div className="row row__column">
        
          <figure className="footer__container">
            <img src={footerLogo} className="footer__logo" alt="" />
          </figure>
      
        <div className="footer__list">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/movies" className="footer__link">Movies</Link>
        </div>
        <div className="footer__copyright">Copyright &copy; 2026 Buster's Block</div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer;
