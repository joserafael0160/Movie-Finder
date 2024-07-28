import "./App.css"
import { useEffect, useRef, useState } from "react"
import { useMovies } from "./hooks/useMovies"
import { Movies } from "./components/Movies"

function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    

    if(search === "") {
      if(isFirstInput.current) {
        isFirstInput.current = search === ""
        return
      }
      else {
        setError("you can't search for an empty movie")
        return 

      }
    }

    if(search.match(/^\d+$/)) {
      setError("you can't search for a movie with a number")
      return
    }

    if(search.length < 3) {
      setError("you can't search for a movie with less than 3 characters")
      return
    }
    
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
function App() { 
  const [sort, setSort] = useState (false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  function handleSubmit(event) {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  function handleChange(event) {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMovies({ search: newSearch })

  }
  return (
    <div className="page">
      <header>
        <h1>Movie Finder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }} onChange={handleChange} value={search} name="query" placeholder="Avengers, Star Wars, The Matrix" />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
        
      </main>
    </div>
  )
}


export default App
