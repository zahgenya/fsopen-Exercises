const Persons = ({filteredNames, }) => {
  return (
  <>
    {filteredNames.map((person) => (
       <div key={person.id} style={{ marginBottom: '0rem' }}>
       {person.name} {person.number}
       </div>
    ))}
  </>
  )
}

export default Persons