import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const resultado = categoryId
            ? products.filter(p => p.category === categoryId)
            : products

        setItems(resultado)
        setLoading(false)

    }, [categoryId])

    return (
        <div className="item-list-container">
            {loading
                ? <p>Cargando productos...</p>
                : items.length === 0
                    ? <p>No hay productos disponibles en esta categoría.</p>
                    : <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer