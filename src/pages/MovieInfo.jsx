import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';

function MovieInfo( {movies} ) {

    const { id } = useParams();
    const movie = movies.find(movie => +movie.id === +id);

    const [moviePlot, setMoviePlot] = useState([movie.Plot])

  return (
    <div className="movies__body">
        <main id="movies__main">
            <div className="movies__container">
                <div className="row">
                    <div className="movie__selected--top">
                        <Link to="/movies" className="movie__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/movie" className="movie__link">
                        <h2 className="movie__selected--title--top">Movies</h2>
                        </Link>
                    </div>
 
                    <div className="movie__selected">
                        <figure className="movie__selected--figure">
                            <img src={movie.Poster} />
                        </figure>
                        <div className="movie__selected--description">
                            <h2 className="movie__selected--title">{movie.Title}</h2>
                            <p className="movie__selected--plot">{movie.Plot}</p>
                        </div>
                    </div>

                    <div className="movies__container">
                        <div className="row">
                            <div className="movie__selected--top">
                                <h2 className="movie__selected--title--top">
                                    Recommended Books
                                </h2>
                            </div>
                            <div className="movies">
                            {movies
                                .filter((movie) => movie.Plot ===  )
                                .map((movie) => (
                                    <Movie movie={movie} key={movie.id} />
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
  )
}

export default MovieInfo
