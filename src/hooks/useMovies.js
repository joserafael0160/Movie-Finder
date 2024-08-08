import { useState, useRef, useMemo, useCallback } from "react"
import { searchMovies } from "../services/movies"

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)
  const getMovies = useCallback(async ({ search }) => {
    if(search === previousSearch.current) return 
    
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch(e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])
     
  
  const sortedMovies = useMemo(() => {
    if(!movies) return;
    return sort 
    ? [...movies].sort((a,b) => a.year.localeCompare(b.year))
    : movies
  }, [sort, movies])
  

  return {movies: sortedMovies, loading, getMovies}
}