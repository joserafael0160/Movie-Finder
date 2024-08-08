import "./App.css"
import { useCallback, useState } from "react"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"
import { useSearch } from "./hooks/useSearch"
import { Main } from "./components/Main"
import { Header } from "./components/Header"
import { Form } from "./components/Form"

function App() { 
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
      <Header error={error} >
        <Form handleSubmit={handleSubmit} error={error} handleChange={handleChange} search={search} handleSort={handleSort} sort={sort}/>
      </Header>  
      <Main loading={loading} movies={movies}/>
    </div>
  )
}


export default App
