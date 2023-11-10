import { useAuthContext } from './useAuthContext'
import { useCustomersContext } from './useCustomersContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useCustomersContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_CUSTOMERS', payload: null })
  }

  return { logout }
}