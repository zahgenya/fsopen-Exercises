import personService from "../services/personService"

const Persons = ({ filteredNames, setPersons }) => {
  const confirmDelete = (id, name) => {
    if (confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(response => {
          console.log(`DELETE person with ID ${id}`)
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  return (
    <>
      {filteredNames.map((person) => (
        <div key={person.id} style={{ marginBottom: '0rem' }}>
          {person.name} {person.number}
          <button onClick={() => confirmDelete(person.id, person.name)}>delete</button>
        </div>
      ))}
    </>
  )
}

export default Persons