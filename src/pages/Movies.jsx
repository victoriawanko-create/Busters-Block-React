import React, { useEffect, useState } from 'react';
import "./Movies.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Movies() {
    const movieTitle = "Inception";
    const apiKey = "95e3e9cb";
    const [movieData, setMovieData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovieData(data); 
            } catch (error) {
                console.error("Error fetching the movie data:", error);
            }
        };

        fetchMovieData(); 
    }, [movieTitle, apiKey]); 

    const searchMovies = async () => {
        if (!searchTerm) return; 
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMovieData(data);
        } catch (error) {
            console.error("Error fetching the movie data:", error);
        }
    };

    function filterMovies(event) {
        const filter = event.target.value;
        let sortedMovies = [...(movieData?.Search || [])];

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
  setMovieData((previousData) => ({
  ...previousData,
  Search: sortedMovies,
}));
}



    return (
        <div>
            <Nav />

            <div className="movies__header">
                <div classname="movies__controls">
                <h2 className="section__title movies__header--title">
                    All <span className="blue">Movies</span>
                </h2>

                <div className="search-and-sort">
                 <div className="search-container">
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Search for a movie..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <button id="search-btn" onClick={searchMovies}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <select id="filter" onchange="filterMovies(event)">
                    <option value="" disabled selected>Sort</option>
                    <option value="A_TO_Z">Alphabetical A to Z</option>
                    <option value="Z_TO_A">Alphabetical Z to A</option>
                    <option value="NEW_TO_OLD">Newest to oldest</option>  
                    <option value="OLD_TO_NEW">Oldest to newest</option>  
                </select>
                </div>

                </div>
                

               <div className="movie-list">
                {movieData?.Search?.length > 0 ? (
                 movieData.Search.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                 {movie.Poster !== "N/A" ? (
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
        ) : (
          <p>No poster available</p>
        )}
      </div>
    ))
  ) : (
    <p>No movies found. Try another search.</p>
  )}

</div>
       <Footer />             
            </div>
        </div>
      
    );
}


export default Movies;


