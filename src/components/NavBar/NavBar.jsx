import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <span className="navbar-logo-mark">M</span>
                <span>Floreria Mia</span>
            </Link>
            <div className="navbar-links">
                <Link to="/">Catalogo</Link>
                <Link to="/category/ramos">Ramos</Link>
                <Link to="/category/plantas">Plantas</Link>
                <Link to="/category/ocasiones">Ocasiones especiales</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
