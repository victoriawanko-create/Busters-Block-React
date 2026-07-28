import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home';
import Nav from './components/Nav';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState([]);

  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="id:" element={<Nav />} />
            <Route path="/movies" element={<Movies movies={movies} setMovies={setMovies} />} />
            <Route path="/movie/:id" element={<MovieInfo  movies={movies}/>} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
