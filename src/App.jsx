import React from "react";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
