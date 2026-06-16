import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
const Cart = () => {
    const {cartItems,removeItem,clearCart,getTotalPrice} = useContext(CartContext);
    
    return (
        // carro vacio
        <div className="cart-container">
            {cartItems.length === 0 
               ? (
                    <div>
                        <p>Tu carrito está vacío</p>
                        <Link to="/">Ver productos</Link>
                    </div>
                )
                : (
                    <div>
                        <h2>Carrito de Compras</h2>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>  
                                    <p>{item.title} - ${item.price} x {item.quantity}</p>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: ${getTotalPrice()}</p>
                        <button onClick={clearCart}>Vaciar carrito</button>
                        <Link to="/checkout">Finalizar compra</Link>
                    </div>
                )
            } 
        </div>
    );
};

export default Cart;