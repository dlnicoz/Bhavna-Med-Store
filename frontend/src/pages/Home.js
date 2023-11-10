import { useEffect }from 'react'
import { useCustomersContext } from "../hooks/useCustomersContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import CustomerDetails from '../components/CustomerDetails'
import WorkoutForm from '../components/CustomerForm'

const Home = () => {
  const {customers, dispatch} = useCustomersContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/customers', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CUSTOMERS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="customers">
        {customers && customers.map((customer) => (
          <CustomerDetails key={customer._id} customer={customer} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home