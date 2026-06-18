import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { itemId } = useParams()

   useEffect(() => {
    const docRef = doc(db, "products", itemId)

    getDoc(docRef)
        .then(snapshot => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            }
        })
}, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer