import personService from "../services/Persons"

const PersonList = ({ filteredPersons, setPersons }) => {

  const handleDelete = (person) => {
    personService
      .remove(person.id)
      .then(removedPerson => {
        setPersons(filteredPersons.filter(p => p.id != removedPerson.id))
      })
  }

  return (
    <div>
      {
        filteredPersons
          .map(person =>
            <p key={person.name}>{person.name} <button onClick={() => handleDelete(person)} >delete</button> </p>
          )
      }
    </div>
  )
}

export default PersonList