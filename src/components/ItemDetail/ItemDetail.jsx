import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ id, title, description, price, stock, pictureUrl, category }) => {
    const { addItem } = useContext(CartContext)
    const navigate = useNavigate()

    const handleAdd = (quantity) => {
        addItem({ id, title, price, pictureUrl }, quantity)
        navigate("/cart")
    }

    return (
        <div className="item-detail">
            <img src={pictureUrl} alt={title} />
            <div className="item-detail-info">
                <div className="item-detail-kicker">
                    <span>{category || "Diseno floral"}</span>
                    {stock > 0 && <small>{stock} disponibles</small>}
                </div>
                <h2>{title}</h2>
                <p className="item-detail-description">{description}</p>
                <p className="item-detail-price">${price}</p>
                {stock > 0
                    ? <ItemCount stock={stock} onAdd={handleAdd} />
                    : <p className="item-detail-stock">Producto sin stock disponible</p>
                }
            </div>
        </div>
    )
}

export default ItemDetail
