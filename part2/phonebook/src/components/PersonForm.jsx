import { useState } from "react"

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addName = (event) => {
    event.preventDefault()
  
    const isNameFound = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
  
    const isNumberFound = persons.some(
      (person) => person.number === newNumber
    )

    if (isNameFound && isNumberFound) {
      alert(`${newName} with number ${newNumber} is already added to phonebook`)
    } else if (isNameFound) {
      alert(`${newName} is already added to phonebook`)
    } else if (isNumberFound) {
      alert(`A contact with number ${newNumber} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons([...persons, nameObject])
      setNewName("")
      setNewNumber("")
      console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )

}

export default PersonForm