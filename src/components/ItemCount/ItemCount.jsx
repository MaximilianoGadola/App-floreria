import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const handleSuma = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count">
            <div className="item-count-controls">
                <button className="item-count-btn" onClick={handleResta}>-</button>
                <span className="item-count-value">{count}</span>
                <button className="item-count-btn" onClick={handleSuma}>+</button>
            </div>
            <button className="item-count-add" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
