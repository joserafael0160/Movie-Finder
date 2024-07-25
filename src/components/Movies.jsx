import PropTypes from "prop-types"

function ListOfMovies ({ movies }) {
  return (
    
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

function NoMoviesResults () {
  return (
    <p>No movies found for this search</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
     ? <ListOfMovies movies={movies} />
     : <NoMoviesResults />
        
  )
}

Movies.propTypes = {
  movies: PropTypes.array,
};