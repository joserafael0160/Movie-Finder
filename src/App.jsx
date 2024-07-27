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
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ search })
  }

  function handleChange(event) {
    updateSearch(event.target.value)
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
          <button>Search</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}


export default App
