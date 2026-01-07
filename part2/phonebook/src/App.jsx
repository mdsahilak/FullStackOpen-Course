import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonList from './PersonList'
import NewPersonForm from './NewPersonForm'

const App = () => {
  const [search, setSearch] = useState('')

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const data = response.data
        setPersons(data)
      })
  }, [])

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