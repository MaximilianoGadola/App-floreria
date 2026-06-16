import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import "./CheckoutForm.css"
const CheckoutForm = () => {
    const {cartItems, getTotalPrice,clearCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [phone, setPhone] = useState("");
    const handleSubmit = () => {
        if (!name || !email || !phone) {
            alert("Por favor completa todos los campos");
            return;
        }
        const order = { 
            buyer: { name, email, phone},
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: getTotalPrice(),
            date: new Date().toLocaleDateString()
        }
        console.log("Orden creada:", order);
        setOrderId("ORDEN-" + Math.random().toString(36).substr(2, 9).toUpperCase());
        clearCart();
    }   
  return (
    <div className="checkout">
        {orderId
            ? (
                <div className="order-confirmation">
                    <h2>¡Gracias por tu compra!</h2>
                    <p>Tu pedido fue registrado correctamente.</p>
                    <p>Número de orden: <strong>{orderId}</strong></p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            )
            : (
                <div className="checkout-form">
                    <h2>Finalizar compra</h2>
                    <input type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button onClick={handleSubmit}>Confirmar compra</button>
                </div>
            )
        }
    </div>
)
}

export default CheckoutForm