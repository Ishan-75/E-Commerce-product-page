import { useState } from "react";
import Navbar from "./Navbar";
import ProductSection from "./ProductSection";
import ProductPreview from "./ProductPreview";

function App() {
  const [cart, setCart] = useState({
    quantity: 0,
    price: 125.00,
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <ProductSection setCart={setCart} setShowCart={setShowCart} />
      <ProductPreview/>
    </>
  );
}

export default App;