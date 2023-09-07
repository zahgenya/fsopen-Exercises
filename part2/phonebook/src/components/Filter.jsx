import { useEffect, useState } from "react"

const Filter = ({ persons, setFilteredNames }) => {
    const [input, setInput] = useState("")

    useEffect(() => {
        const filtered = persons.filter((person) =>
          person.name.toLowerCase().includes(input.toLowerCase())
        )
        setFilteredNames(filtered)
      }, [persons, input])
    
      const handleInput = (event) => {
        const userInput = event.target.value
        setInput(userInput)
      }

      return (
      <div>
        filter shown with <input value={input} onChange={handleInput} />
      </div>
      )
}

export default Filter