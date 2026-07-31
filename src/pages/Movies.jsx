import React, { useEffect, useState } from "react";
import "./Movies.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Movie from "../components/ui/Movie";
import "./Movies.css"

const apiKey = "95e3e9cb";

function Movies({ movies, setMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchMovies(title) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }

  useEffect(() => {
    fetchMovies("Inception");
  }, []);

  function searchMovies() {
    if (!searchTerm.trim()) return;

    fetchMovies(searchTerm);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      searchMovies(); 
    }
  }

  function filterMovies(event) {
    const filter = event.target.value;
    const sortedMovies = [...movies];

    if (filter === "A_TO_Z") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    }

    if (filter === "Z_TO_A") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    if (filter === "NEW_TO_OLD") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    if (filter === "OLD_TO_NEW") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    setMovies(sortedMovies);
  }

  return (
    <>
      <Nav />

    <div className="movies">
      <div className="search-and-sort">
  <input
    type="text"
    placeholder="Search for a movie..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
    onKeyDown={handleKeyPress}
  />
  <button onClick={searchMovies}>Search</button>


  <select defaultValue="" onChange={filterMovies}>
    <option value="" disabled>Sort</option>
    <option value="A_TO_Z">Alphabetical A to Z</option>
    <option value="Z_TO_A">Alphabetical Z to A</option>
    <option value="NEW_TO_OLD">Newest to oldest</option>
    <option value="OLD_TO_NEW">Oldest to newest</option>
  </select>
</div>

<div className="movie-list">
  {movies.map((movie) => (
    <Movie movie={movie} key={movie.imdbID} />
  ))}
</div>

</div>

      <Footer />
    </>
  );
}

export default Movies;
