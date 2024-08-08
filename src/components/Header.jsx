import PropTypes from "react"
export function Header({error, children}) {
  return (
    <header>
      <h1>Movie Finder</h1>
        {children}
      {error && <p style={{color: "red"}}>{error}</p>}
    </header>
  )
}

Header.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.element
}