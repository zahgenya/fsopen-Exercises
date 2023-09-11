import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/personService"
import Notification from "./components/Notification"
import ErrorNotification from "./components/ErrorNotification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredNames, setFilteredNames] = useState(persons)
  const [succesMessage, setSuccesMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
      <ErrorNotification message={errorMessage} />
      <Notification message={succesMessage} />
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredNames={setFilteredNames} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setSuccesMessage={setSuccesMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames} setPersons={setPersons} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default App