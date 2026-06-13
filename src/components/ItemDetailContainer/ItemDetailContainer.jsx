import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const foundProduct = products.find(p => p.id === itemId)
        setProduct(foundProduct)
    }, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer