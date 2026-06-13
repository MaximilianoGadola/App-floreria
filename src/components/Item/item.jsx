import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <div className="item-card">
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item