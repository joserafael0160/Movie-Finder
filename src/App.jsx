import "./App.css"
import { useRef } from "react"
import { useMovies } from "./hooks/useMovies"
import { Movies } from "./components/Movies"

function App() {
  const {movies} = useMovies()

  return (
    <div className="page">
      <header>
        <h1>Movie Finder</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix" />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}


export default App
