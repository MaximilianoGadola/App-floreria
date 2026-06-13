import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <div className='cart-widget'>
            <Link to="/cart">
                <span className="cart-icon">🛒</span>
                {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
            </Link>
        </div>
    )
}

export default CartWidget