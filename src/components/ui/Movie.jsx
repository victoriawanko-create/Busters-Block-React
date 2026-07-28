import React, { useState } from 'react';
import "./Movie.css"
import { Link } from 'react-router-dom';

function Movie({ movie }) {

  return (
 <Link to={`/movie/${movie.imdbID}`}>
    <div className="movie-card">
      <div className="poster-container">
        {movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
        ) : (
          <p>No poster available</p>
        )}
      </div>

      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
    </Link>
  );
}

export default Movie;
