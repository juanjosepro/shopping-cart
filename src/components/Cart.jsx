import { useId } from 'react'
import './Cart.css'
import { ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          qty: {quantity}
        </small>
        <button onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
    <label className="cart-button" htmlFor={cartCheckboxId}> add </label>
    <input type="checkbox" id={cartCheckboxId} hidden />

    <aside className="cart">
      <ul>
        {
          cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))
        }
      </ul>
      <button onClick={clearCart}>
        <ClearCartIcon />
      </button>
    </aside>
    </>
  )
}
