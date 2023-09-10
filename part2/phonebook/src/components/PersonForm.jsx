import { useState } from "react"
import axios from "axios"

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log("ADD NAME")
    const isNameFound =
    newName &&
    persons.some(
      (person) => person.name && person.name.toLowerCase() === newName.toLowerCase()
    )

    const isNumberFound = newNumber && persons.some(
      (person) => person.number === newNumber
    )

    if (isNameFound && isNumberFound) {
      alert(`${newName} with number ${newNumber} is already added to phonebook`);
    } else if (isNameFound) {
      const existingPerson = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );

      if (existingPerson) {
        if (
          confirm(
            `${existingPerson.name} is already added to phonebook, replace old number with a new one?`
          )
        ) {
          axios
            .put(`http://localhost:3001/persons/${existingPerson.id}`, {
              number: newNumber,
            })
            .then(response => {
              const updatePerson = response.data;
              setPersons((prevPersons) =>
                prevPersons.map((person) =>
                  person.id === updatePerson.id ? updatePerson : person
                )
              );
              setNewNumber("")
              setNewName("")
            })
            .catch(error => {
              console.error(error)
            })
        }
      } else if (isNumberFound) {
        alert(`number ${newNumber} is already added to phonebook`)
      } else {
        const nameObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        }
        
        axios
          .post("http://localhost:3001/persons", nameObject)
          .then(response => {
            console.log("POST response:", response.data)
            setPersons([...persons, response.data])
            setNewName("")
            setNewNumber("")
          })
          .catch(err => console.log("POST error:", err))
      }
    }
  }
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm