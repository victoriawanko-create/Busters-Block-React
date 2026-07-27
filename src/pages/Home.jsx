import React from 'react'
import "./Home.css";
import logo from '../assets/logo.png';
import Nav from '../components/Nav';
import Movies from '../pages/Movies';
import homeImg from '../assets/home-cinema.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

      <Nav />

      <section className="welcome-section">
        <div className="header__description">
        <h1>Welcome to Buster's Block!</h1>
          <h2>No Late Fees? What a Rewind! Watch <span className="blue">TODAY</span></h2>
             <Link to="/movies">
            <button className="btn">Browse Movies</button>
            </Link>
            <figure class="header__img--wrapper">
          <img src={homeImg} class="header__img" />
            </figure>
          </div>
            
      </section>

      <section className="highlights-section">
         <div class="container">
        <div class="row">
      <h2 className="section__title">
        Why <span className="blue">Buster's Block?</span>
      </h2>
      <div className="highlight__wrapper">
        <div className="highlight">
          <div className="highlight__img">
            <i className="fas fa-bolt"></i>
          </div>
          <h3 className="highlight__subtitle">Quick and Easy</h3>
          <p className="highlight__para">
            Get access to the movies you purchased online instantly.
          </p>
        </div>
        <div className="highlight">
          <div className="highlight__img">
            <i className="fas fa-film"></i>
          </div>
          <h3 className="highlight__subtitle">600,000+ Movies</h3>
          <p className="highlight__para">
            Buster's Block carries a wide selection of movies across multiple genres.
          </p>
        </div>
        <div className="highlight">
          <div className="highlight__img">
            <i className="fa-solid fa-earth-americas"></i>
          </div>
          <h3 className="highlight__subtitle">Universal</h3>
          <p className="highlight__para">
            Gain universal access to the most popular movies from the 1920s to the 2020s for only $10 a month.
          </p>
        </div>
      </div>
      </div>
      </div>
      </section>

      <Footer />

    </>
  );
}

export default Home;
