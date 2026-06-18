import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
    const { cartItems, removeItem, clearCart, getTotalPrice } = useContext(CartContext)

    return (
        <div className="cart-container">
            {cartItems.length === 0
                ? (
                    <div className="cart-empty">
                        <h2>Tu carrito esta vacio</h2>
                        <p>Elegi tus flores favoritas y prepara tu pedido.</p>
                        <Link to="/">Ver productos</Link>
                    </div>
                )
                : (
                    <div className="cart-panel">
                        <h2>Carrito de Compras</h2>
                        <ul className="cart-list">
                            {cartItems.map((item) => (
                                <li className="cart-row" key={item.id}>
                                    <img src={item.pictureUrl} alt={item.title} />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>${item.price} x {item.quantity}</p>
                                    </div>
                                    <button className="cart-remove" onClick={() => removeItem(item.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <p className="cart-total">Total: ${getTotalPrice()}</p>
                        <div className="cart-actions">
                            <button className="cart-clear" onClick={clearCart}>Vaciar carrito</button>
                            <Link className="cart-checkout-link" to="/checkout">Finalizar compra</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
