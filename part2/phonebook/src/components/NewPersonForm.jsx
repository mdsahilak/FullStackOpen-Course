import { useState } from 'react'
import personService from '../services/Persons'

const NewPersonForm = ({ persons, setPersons, setMessage }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (e => setNewName(e.target.value))
    const handleNumberChange = (e => setNewNumber(e.target.value))

    const addButtonClicked = (event) => {
        event.preventDefault()

        if (persons.some((person) => person.name === newName)) {
            if (window.confirm(`${newName} is already in the phonebook. Do you want replace the old number with the new one ?`)) {
                const person = persons.find(p => p.name == newName)

                personService
                    .update(person.id, { name: newName, number: newNumber })
                    .then(updatedPerson => {
                        setPersons(persons.map(p => p.id == updatedPerson.id ? updatedPerson : p))

                        setNewNumber('')
                        setNewName('')
                    })

                    setMessage(`${person.name}'s phone number has been updated!`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000);
            } else {
                setNewNumber('')
                setNewName('')
            }
        } else {
            personService
                .create({ name: newName, number: newNumber })
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))

                    setNewNumber('')
                    setNewName('')

                    setMessage(`${newName} has been added!`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000);
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