import React from 'react'

function Movies() {
  return (
    <>
      <div className="movies__header">
          <h2 className="section__title movies__header--title">
            All <span class="blue">Movies</span>
          </h2>

          <div className="search-container">
                <input type="text" id="search" placeholder="Search for a movie..." />
                <button id="search-btn" onclick="searchMovies()">
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

        <div id="movie-list" class="movies">
          <i class="fas fa-spinner movies__loading--spinner"></i>
        </div>
    </>
  )
}

export default Movies
