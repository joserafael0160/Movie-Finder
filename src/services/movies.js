export const searchMovies = async ({ search }) => {
  if(search === "") return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error("Error searching movies")
  }
  
}