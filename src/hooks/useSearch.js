import { useRef, useEffect, useState } from "react"
export function useSearch() {
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