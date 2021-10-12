import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

//NOTE: Can import named components as below to make import statements neater.

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
