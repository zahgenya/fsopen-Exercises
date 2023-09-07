import { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567",
      id: 1
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    }
  ]) 

  const [filteredNames, setFilteredNames] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredNames={setFilteredNames}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames}/>
    </div>
  )
}

export default App