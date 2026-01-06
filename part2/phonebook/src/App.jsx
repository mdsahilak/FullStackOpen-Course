import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (e => setNewName(e.target.value))
  const handleNumberChange = (e => setNewNumber(e.target.value))
  const handleSearchChange = (e => setSearch(e.target.value))

  const addButtonClicked = (event) => {
    event.preventDefault()
    
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>

      <h3>Filter by Name</h3>
      <input value={search} onChange={handleSearchChange} />

      <h3>Phone Numbers</h3>
      <div>
        {filteredPersons.map(person => <p key={person.name}>{person.name} </p>)}
      </div>

      <h3>Add a new phone number</h3>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addButtonClicked} >add</button>
        </div>
      </form>
      
    </div>
  )
}

export default App
