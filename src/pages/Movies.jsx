import React, { useEffect, useState } from 'react';
import "./Movies.css";
import Nav from '../components/Nav';

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

    return (
        <div>
            <Nav />
            <div className="movies__header">
                <h2 className="section__title movies__header--title">
                    All <span className="blue">Movies</span>
                </h2>

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

                <div className="movie-list">
                    <div className="movie-card">
                    {movieData?.Search?.length > 0 ? (
                        movieData.Search.map((movie) => (
                        <div
                            key={movie.imdbID}>
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
                     </div>
            </div>
        </div>
    );
}

export default Movies;


