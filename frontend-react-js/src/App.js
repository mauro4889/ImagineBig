import { Search } from "./components/search/Search";
import './App.css'
import { useEffect, useState } from "react";
import { productos } from './products/products'
import { Products } from "./components/products/Products";

function App() {
  const [isProducts, setIsProducts] = useState()

  const onSubmit = (values) => {
    let resultado = productos.filter(product => product.name.includes(values.toUpperCase()) || product.id.includes(values.toUpperCase()))
    setIsProducts(resultado)
  }

  useEffect(()=>{
    setIsProducts('')
  },[])

  return (
    <div className="App" >
      <Search handleSubmit={onSubmit} />
      <Products product={isProducts}/>
    </div>
  );
}

export default App;