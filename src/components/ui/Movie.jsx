import React, { useState } from 'react';
import "./Movie.css"
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  const [imageError, setImageError] = useState(false);

  const hasPoster =
    movie.Poster &&
    movie.Poster !== "N/A" &&
    !imageError;

  return (
    <div className="movie-card">
      <div className="poster-container">
        {hasPoster ? (
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              onError={() => setImageError(true)}
            />
          </Link>
        ) : (
          <p>No poster available</p>
        )}
      </div>

      <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie__bottom">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
     </div>
      </Link>

    
    </div>
  );
}

export default Movie;
