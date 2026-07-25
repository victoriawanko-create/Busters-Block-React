import React from 'react'
import "./Footer.css";
import footerLogo from "../assets/logo.png"

function Footer() {
  return (
    <>
    <section className="footer">
      <div class="container">
      <div class="row row__column">
        <a href="#">
          <figure>
            <img src={footerLogo} alt="" />
          </figure>
        </a>
        <div class="footer__list">
          <a href="#" class="footer__link">Home</a>
          <a class="footer__link no-cursor">About</a>
          <a href="#features" class="footer__link">Movies</a>
          <a class="footer__link no-cursor">Contact</a>
        </div>
        <div class="footer__copyright">Copyright &copy; 2026 Buster's Block</div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer;
