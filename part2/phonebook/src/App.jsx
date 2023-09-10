import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from 'axios'
import personService from "./services/personService"

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredNames, setFilteredNames] = useState(persons)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log("render", persons.length, "persons")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredNames={setFilteredNames} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames} setPersons={setPersons} />
    </div>
  )
}

export default App