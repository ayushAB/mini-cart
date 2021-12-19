import NavBar from "./components/NavBar";
import Product from "./components/Product";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState('');

  async function fetchData() {
    // url should be used from environment variable
    // and configured with axios 
    try {
      const { data } = await axios.get("https://dnc0cmt2n557n.cloudfront.net/products.json");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', cart);
  }, [cart]);

  function updateCart() {
    console.log(JSON.parse(window.localStorage.getItem('cart')));
    setCart(window.localStorage.getItem('cart')) ;
   }

  return (
    <div className="App">
      <header>
        <NavBar cart={cart} />
      </header>
      <div className="mt-10">
      { products.map( (product) => <Product key={product.id} product={product} onChange={updateCart} />) }
      </div>
    </div>
  );
}

export default App;
