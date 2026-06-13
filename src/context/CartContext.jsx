import { createContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addItem = (item, quantity) => {
        const estaEnCarrito = cartItems.some(producto => producto.id === item.id)

        if (estaEnCarrito) {
            setCartItems(carritoActual =>
                carritoActual.map(producto =>
                    producto.id === item.id
                        ? { ...producto, quantity: producto.quantity + quantity }
                        : producto
                )
            )
        } else {
            setCartItems(carritoActual => [...carritoActual, { ...item, quantity }])
        }
    }
    const removeItem = (id) => {        
        setCartItems(carritoActual => carritoActual.filter(producto => producto.id !== id))
    }
    const clearCart = () => { setCartItems([])}
    const isInCart=(id)=>{
        return cartItems.some(producto => producto.id === id)
    }
    const getTotalQuantity = () => {
        return cartItems.reduce((total, producto) => total + producto.quantity, 0)
    }
    const getTotalPrice = () => {
        return cartItems.reduce((total, producto) => total + producto.price * producto.quantity, 0)
    }
    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addItem, 
            removeItem, 
            clearCart, 
            isInCart,
            getTotalQuantity, 
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext