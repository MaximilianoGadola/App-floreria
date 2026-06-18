import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import CartContext from "../../context/CartContext"
import { db } from "../../firebase/config"
import "./CheckoutForm.css"

const CheckoutForm = () => {
    const { cartItems, getTotalPrice, clearCart } = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [phone, setPhone] = useState("")

    const handleSubmit = async () => {
        if (!name || !email || !phone) {
            alert("Por favor completa todos los campos")
            return
        }

        const order = {
            buyer: { name, email, phone },
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const ordersCollection = collection(db, "orders")
        const docRef = await addDoc(ordersCollection, order)
        setOrderId(docRef.id)
        clearCart()
    }

    return (
        <div className="checkout">
            {orderId
                ? (
                    <div className="order-confirmation">
                        <span className="order-confirmation-icon" aria-hidden="true">&#10003;</span>
                        <h2>Gracias por tu compra!</h2>
                        <p>Tu pedido fue registrado correctamente.</p>
                        <p>Numero de orden: <strong>{orderId}</strong></p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                )
                : (
                    <div className="checkout-form">
                        <h2>Finalizar compra</h2>
                        <p className="checkout-summary">Total del pedido: <strong>${getTotalPrice()}</strong></p>
                        <div className="checkout-field">
                            <label htmlFor="checkout-name">Nombre completo</label>
                            <input id="checkout-name" type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="checkout-field">
                            <label htmlFor="checkout-email">Email</label>
                            <input id="checkout-email" type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="checkout-field">
                            <label htmlFor="checkout-phone">Telefono</label>
                            <input id="checkout-phone" type="text" placeholder="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button onClick={handleSubmit}>Confirmar compra</button>
                    </div>
                )
            }
        </div>
    )
}

export default CheckoutForm
