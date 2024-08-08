import { useId } from "react"
import { SortIcon } from "./SortIcon"
import PropTypes from "react"
export function Form({handleSubmit, error, handleChange, handleSort, search, sort}) {
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


Form.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSort: PropTypes.func,
  search: PropTypes.string,
  sort: PropTypes.array,

}