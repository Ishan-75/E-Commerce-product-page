import { useState } from "react";
import Navbar from "./Navbar";
import CartPage from "./CartPage";
// import ProductPreview from "./ProductPreview";

function App() {
  const [cart, setCart] = useState({
    quantity: 0,
    price: 125.00,
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <CartPage setCart={setCart} setShowCart={setShowCart} />

    </>
  );
}

export default App;