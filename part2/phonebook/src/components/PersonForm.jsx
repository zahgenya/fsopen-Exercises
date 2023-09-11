import { useState } from "react"
import personService from "../services/personService"

const PersonForm = ({ persons, setPersons, setSuccesMessage, setErrorMessage }) => {
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
    const isNameFound = newName && persons.some(
      (person) => person.name && person.name?.toLowerCase() === newName.toLowerCase()
    )
    console.log("IsNamefound:", isNameFound)
    const isNumberFound = newNumber && persons.some(
      (person) => person.number === newNumber
    )
    console.log("isNumberFound:", isNumberFound)
    if (isNameFound && isNumberFound) {
      alert(`${newName} with number ${newNumber} is already added to phonebook`);
    } else if (isNameFound && !isNumberFound) {
      const existingPerson = persons.find(
        (person) => person.name?.toLowerCase() === newName?.toLowerCase()
      );
      if (existingPerson) {
        if (
          confirm(
            `${existingPerson.name} is already added to phonebook, replace old number with a new one?`
          )
        ) {
          personService
            .update(existingPerson.id, {
              name: existingPerson.name,
              number: newNumber,
            })
            .then((response) => {
              const updatedPerson = response.data
              setPersons((prevPersons) =>
                prevPersons.map((person) =>
                  person.id === updatedPerson.id ? updatedPerson : person
                )
              )
              setNewNumber("")
              setNewName("")
            })
            .catch((error) => {
              setErrorMessage(
                `Information of ${name} has already been removed from server`
              )
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              console.error("PUT error:", error)
            })
        }
      }
    } else if (!isNameFound && !isNumberFound && newName.trim() !== "") {
      const lastPerson = persons[persons.length - 1]
      const newId = lastPerson ? lastPerson.id + 1: 1

      const nameObject = {
        name: newName,
        number: newNumber,
        id: newId,
      }

      personService
        .create(nameObject)
        .then((response) => {
          console.log("POST response:", response.data)
          setPersons([...persons, response.data])
          setNewName("")
          setNewNumber("")
          setSuccesMessage(`Added ${newName}`)
          setTimeout(() => {
            setSuccesMessage(null)
          }, 5000)
        })
        .catch((err) => console.log("POST error:", err))
    } else {
      alert("Please enter a valid name and number.")
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