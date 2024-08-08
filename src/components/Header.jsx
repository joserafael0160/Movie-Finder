import { Form } from "./Form"
export function Header({handleSubmit, error, handleChange, search, handleSort, sort}) {
  return (
    <header>
      <h1>Movie Finder</h1>
        <Form handleSubmit={handleSubmit} error={error} handleChange={handleChange} search={search} handleSort={handleSort} sort={sort}/>
      {error && <p style={{color: "red"}}>{error}</p>}
    </header>
  )
}