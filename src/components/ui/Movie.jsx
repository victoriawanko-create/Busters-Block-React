import React, { useState } from 'react';

function Movie({ movie }) {
  
  return (
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
  );
}

export default Movie;
