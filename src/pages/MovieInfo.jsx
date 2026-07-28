import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Movie from "../components/ui/Movie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MovieInfo({ movies = [] }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

useEffect(() => {
  async function fetchRecommendations() {
    if (!movie?.Genre || movies.length === 0) return;

    const selectedGenres = movie.Genre
      .split(",")
      .map((genre) => genre.trim());

    const detailedMovies = await Promise.all(
      movies
        .filter(
          (candidate) => candidate.imdbID !== movie.imdbID
        )
        .map(async (candidate) => {
          const response = await fetch(
            `https://www.omdbapi.com/?i=${candidate.imdbID}&apikey=95e3e9cb`
          );

          return response.json();
        })
    );

    const matches = detailedMovies
      .filter((candidate) => {
        const candidateGenres =
          candidate.Genre?.split(",").map((genre) =>
            genre.trim()
          ) || [];

        return candidateGenres.some((genre) =>
          selectedGenres.includes(genre)
        );
      })
      .slice(0, 4);

    setRecommendedMovies(matches);
  }

  fetchRecommendations();
}, [movie, movies]);

  if (loading) {
    return <p>Loading movie...</p>;
  }

  if (!movie || movie.Response === "False") {
    return <p>Movie not found.</p>;
  }

  return (
    <>
        <Nav />

        <Link to="/movies" className="movie__link">
            <FontAwesomeIcon icon="arrow-left" />
        </Link>

        <div className="movie__selected--container">
            <div className="movie__selected">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
            </div>
        </div>

        <div className="recommended__movies">
            <h2>Recommended Movies</h2>
         {recommendedMovies.length > 0 ? (
  recommendedMovies.map((recommendedMovie) => (
    <Movie
      movie={recommendedMovie}
      key={recommendedMovie.imdbID}
    />
  ))
) : (
  <p>No recommended movies found.</p>
)}
</div>

      <Footer />
    </>
  );
}

export default MovieInfo;