import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([item, ...cartItems]);
  };

  return (
    <>
      <Navbar id="navbar" items={cartItems} />
      <Hero />
      <Products id="products" addToCart={addToCart} />
    </>
  );
}
