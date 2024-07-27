import { useState, useRef } from "react"
import { searchMovies } from "../services/movies"
export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)
  const getMovies = async () => {
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
  }

  return {movies, loading, getMovies}
}