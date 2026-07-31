import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Movie from "../components/ui/Movie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./MovieInfo.css"

function MovieInfo({ movies = [] }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
  async function fetchMovieInfo() {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=95e3e9cb&plot=full`
      );

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchMovieInfo();
}, [id]);

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
     <div className="selected__movie--section">

        <Link to="/movies" className="movie__link">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>

            <div className="movie__selected">
        <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="movie__selected--poster"
        />

        <div className="movie__selected--description">
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
        </div>

        </div>

        </div>

<div className="recommended__movies">
  <h2>Recommended Movies</h2>

  <div className="recommended__movies--list">
    {recommendedMovies.map((recommendedMovie) => (
      <Movie
        movie={recommendedMovie}
        key={recommendedMovie.imdbID}
      />
    ))}
  </div>
</div>
      <Footer />
    </>
  );
}

export default MovieInfo;