import "./App.css"
import { useCallback, useState, useId } from "react"
import { useMovies } from "./hooks/useMovies"
import { Movies } from "./components/Movies"
import debounce from "just-debounce-it"
import { SortIcon } from "./components/SortIcon"
import { useSearch } from "./hooks/useSearch"
function App() { 
  const sortId = useId()
  const [sort, setSort] = useState (false)
  
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

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
    debouncedGetMovies(newSearch)
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
            }} onChange={handleChange} value={search} name="query" placeholder="Avengers, Star Wars, The Matrix" 
          />
          <button>Search</button>
        
          <input id={sortId}  type="checkbox" onChange={handleSort} checked={sort} hidden/>
          <label htmlFor={sortId} title="Sort by year"><SortIcon /></label> 
          
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
