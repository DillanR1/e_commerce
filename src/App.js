import React from "react";

// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

//NOTE: Can import named components as below to make import statements neater.

import { Products, Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
