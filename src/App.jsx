import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
function App() {
  return (
     <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} /> 
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
