import { useContext } from 'react'
import { cartContext } from '../context/cart.jsx'

export const useCart = () => {
  const context = useContext(cartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a cartprovider')
  }

  return context
}
