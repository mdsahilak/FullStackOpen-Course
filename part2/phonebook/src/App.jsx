import { useState, useEffect } from 'react'
import axios from 'axios'

import personService from './services/Persons'

import Filter from './components/Filter'
import PersonList from './components/PersonList'
import NewPersonForm from './components/NewPersonForm'
import Notification from './components/Notification'

const App = () => {
  const [search, setSearch] = useState('')

  const [persons, setPersons] = useState([])

  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification notification={notification} />

      <h3>Filter by Name</h3>
      <Filter search={search} setSearch={setSearch} />

      <h3>Phone Numbers</h3>
      <PersonList filteredPersons={filteredPersons} setPersons={setPersons} />

      <h3>Add a new phone number</h3>
      <NewPersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />

    </div>
  )
}

export default App