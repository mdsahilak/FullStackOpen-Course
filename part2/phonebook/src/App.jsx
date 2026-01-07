import { useState } from 'react'
import Filter from './Filter'
import PersonList from './PersonList'
import NewPersonForm from './NewPersonForm'

const App = () => {
  const [search, setSearch] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>

      <h3>Filter by Name</h3>
      <Filter search={search} setSearch={setSearch} />

      <h3>Phone Numbers</h3>
      <PersonList filteredPersons={filteredPersons} />

      <h3>Add a new phone number</h3>
      <NewPersonForm persons={persons} setPersons={setPersons} />
      
    </div>
  )
}

export default App