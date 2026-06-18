import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ id, title, price, pictureUrl, category }) => {
    return (
        <div className="item-card">
            <div className="item-card-image">
                <img src={pictureUrl} alt={title} />
                {category && <span>{category}</span>}
            </div>
            <div className="item-card-body">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
