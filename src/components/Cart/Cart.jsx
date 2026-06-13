import {useContext} from 'react';

const Cart = () => {
    const {cartItems,removeItem,clearCart,getTotalPrice} = useContext(CartContext);
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Your cart is empty.</p>
        </div>
    );
};

export default Cart;