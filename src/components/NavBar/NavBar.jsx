import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
    return (
         <nav className="navbar">
            <Link to="/" className="navbar-logo">Florería Mia</Link>
            <div className="navbar-links">
                <Link to="/">Catálogo</Link>
                <Link to="/category/ramos">Ramos</Link>
                <Link to="/category/plantas">Plantas</Link>
                <Link to="/category/ocasiones">Ocasiones especiales</Link>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar