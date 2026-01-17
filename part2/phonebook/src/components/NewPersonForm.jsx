import { useState } from 'react'
import personService from '../services/Persons'

const NewPersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (e => setNewName(e.target.value))
    const handleNumberChange = (e => setNewNumber(e.target.value))

    const addButtonClicked = (event) => {
        event.preventDefault()

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already in the phonebook`)
        } else {
            personService
                .create({ name: newName, number: newNumber })
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))

                    setNewNumber('')
                    setNewName('')
                })
        }
    }

    return (
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
    )
}

export default NewPersonForm