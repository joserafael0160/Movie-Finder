import { useId } from "react"
import { SortIcon } from "./SortIcon"
export function Form({handleSubmit, error, handleChange, search, handleSort, sort}) {
  const sortId = useId()
  return (
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
  )
}