import { useState } from "react"
const ItemCount=({stock,onAdd})=>{ //Recibe el stock y la función onAdd como props

// el prefijo on es para prop que se reciben del componente padre, y se usan para manejar eventos o acciones específicas dentro del componente. En este caso, onAdd es una función que se ejecutará cuando el usuario haga clic en el botón "Agregar al carrito".

    const [count,setCount]=useState(1)
    const handleSuma=()=>{
        if(count<stock){
            setCount(count+1)
        }
    }
    const handleResta=()=>{ //el prefijo handle se usa para funciones que se definen dentro del componente y se usan para manejar eventos o acciones específicas.
        if(count>1){
            setCount(count-1)
        }
    }
    return(
        <div>
            <button onClick={handleResta}>-</button>
            <span>{count}</span>
            <button onClick={handleSuma}>+</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount