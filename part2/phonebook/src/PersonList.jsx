const PersonList = ({ filteredPersons }) => {
    return (
        <div>
        {filteredPersons.map(person => <p key={person.name}>{person.name} </p>)}
      </div>
    )
}

export default PersonList