import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { db } from "../../firebase/config.js"
import heroImage from "../../assets/hero.png"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const categoryTitle = {
        ramos: "Ramos frescos",
        plantas: "Plantas para regalar",
        ocasiones: "Ocasiones especiales"
    }

    useEffect(() => {
        setLoading(true)

        const productsCollection = collection(db, "products")
        const q = categoryId
            ? query(productsCollection, where("category", "==", categoryId))
            : productsCollection

        getDocs(q)
            .then(snapshot => {
                const productos = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setItems(productos)
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <main className="catalog-page">
            <section className="catalog-hero">
                <div className="catalog-hero-content">
                    <span className="catalog-eyebrow">Floreria Mia</span>
                    <h1>{categoryId ? categoryTitle[categoryId] : "Flores que hacen especial cada momento"}</h1>
                    <p>Arreglos florales, plantas y detalles preparados con una estetica delicada para regalar, decorar y celebrar.</p>
                    <div className="catalog-hero-actions">
                        <Link to="/">Ver catalogo</Link>
                        <Link to="/category/ocasiones">Regalos especiales</Link>
                    </div>
                </div>
                <div className="catalog-hero-media">
                    <img src={heroImage} alt="Arreglo floral de Floreria Mia" />
                    <div className="catalog-hero-note">
                        <strong>Pedidos cuidados</strong>
                        <span>Seleccion fresca y presentacion lista para regalar</span>
                    </div>
                </div>
            </section>

            <section className="category-strip" aria-label="Categorias destacadas">
                <Link to="/category/ramos">
                    <span>Ramos</span>
                    <small>Flores frescas y coloridas</small>
                </Link>
                <Link to="/category/plantas">
                    <span>Plantas</span>
                    <small>Verde para cada espacio</small>
                </Link>
                <Link to="/category/ocasiones">
                    <span>Ocasiones</span>
                    <small>Detalles para sorprender</small>
                </Link>
            </section>

            <section className="item-list-container">
                <div className="catalog-section-title">
                    <span>{categoryId ? "Seleccion curada" : "Catalogo"}</span>
                    <h2>{categoryId ? categoryTitle[categoryId] : "Nuestros favoritos"}</h2>
                </div>
                {loading
                    ? <p className="catalog-message">Cargando productos...</p>
                    : items.length === 0
                        ? <p className="catalog-message">No hay productos disponibles en esta categoria.</p>
                        : <ItemList items={items} />
                }
            </section>
        </main>
    )
}

export default ItemListContainer
