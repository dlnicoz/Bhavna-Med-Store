import { useState } from "react"
import { useCustomersContext } from "../hooks/useCustomersContext"
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useCustomersContext()
  const { user } = useAuthContext()

  const [name, setTitle] = useState('')
  const [description, setLoad] = useState('')
  const [phone, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const customer = {name, description, phone}

    const response = await fetch('/api/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_CUSTOMER', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Customer</h3>

      <label>Full name:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>Number:</label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={phone}
        className={emptyFields.includes('phone') ? 'error' : ''}
      />

      <button>Add Customer</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
