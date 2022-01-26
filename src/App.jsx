import React from "react";
import "antd/dist/antd.css";
import { useState } from "react/cjs/react.development";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([item, ...cartItems]);
    // setCartItems([]);
  };

  return (
    <div className="App">
      <Navbar items={cartItems} />
      <Hero />
      <Products addToCart={addToCart} />
    </div>
  );
}

export default App;
