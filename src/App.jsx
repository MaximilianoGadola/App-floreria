import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/Cart/Cart.jsx'
import CheckoutForm from './components/CheckoutForm/CheckoutForm.jsx'
function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} /> 
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
