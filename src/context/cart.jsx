import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer, CART_ACTION_TYPES } from '../reducers/cart'

export const cartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  // const [cart, setCart] = useState([])

  // const addToCart = product => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]))
  // }

  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      { children }
    </cartContext.Provider>
  )
}
