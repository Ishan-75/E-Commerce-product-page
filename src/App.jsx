import { useState } from "react";
import Navbar from "./Navbar";
import CartPage from "./CartPage";

function App() {
  const [cart, setCart] = useState({
    quantity: 0,
    price: 125.00,
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <CartPage setCart={setCart} setShowCart={setShowCart} cart={cart} />

    </>
  );
}

export default App;