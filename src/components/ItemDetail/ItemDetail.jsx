import {useContext} from "react";
import CartContext  from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail=({id,title,description,price,stock,pictureUrl})=>{
    const {addItem}=useContext(CartContext);
    const navigate=useNavigate();
    const handleAdd=(quantity)=>{
        
        addItem({id,title,price,pictureUrl},quantity);
        navigate("/cart");
    }   
        return (
        <div className="item-detail">
            <img src={pictureUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            {stock > 0
                ? <ItemCount stock={stock} onAdd={handleAdd} />
                : <p>Producto sin stock disponible</p>
            }
        </div>
    )}
export default ItemDetail 