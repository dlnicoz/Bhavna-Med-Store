import { useCustomersContext } from '../hooks/useCustomersContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CustomerDetails = ({ customer }) => {
  const { dispatch } = useCustomersContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/customers/' + customer._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CUSTOMER', payload: json})
    }
  }

  return (
    <div className="customer-details">
      <h4>{customer.name}</h4>
      <p><strong>Description : </strong>{customer.description}</p>
      <p><strong>Number : </strong>{customer.phone}</p>
      <p>{formatDistanceToNow(new Date(customer.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default CustomerDetails
