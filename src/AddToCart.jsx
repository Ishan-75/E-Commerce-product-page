import { useState } from "react";

function AddToCart({ setCart, setShowCart, cart }) {
  const [cartValue, setCartValue] = useState(0);

  const increment = () => {
    setCartValue((prev) => prev + 1);
  };

  const decrement = () => {
    if (cartValue > 0) {
      setCartValue((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (cartValue === 0) return;

    setCart({
      quantity: cartValue,
      price: 125,
    });

  };

  return (
    <>
      <div className="price-details">
        <div className="product-price-with-discount">
          <p className="product-current-price">$125.00</p>
          <div className="product-discount">50%</div>
        </div>
        <p className="product-original-price">$250.00</p>
      </div>

      <div className="add-to-cart-and-btns">
        <div className="cart-controls">
          <div className="cart-inc-dec">
            {/* <img
              className="cart-inc-btn cart-btn"
              src="./icon-minus.svg"
              alt="decrement"
              onClick={decrement}
            /> */}
            <button className="cart-btn" onClick={increment}>
              <img src="./icon-minus.svg" alt="decrement" />
            </button>

            <p className="cart-items">{cartValue}</p>
            <button className="cart-btn" onClick={increment}>
              <img src="./icon-plus.svg" alt="increment" />
            </button>
          </div>
        </div>

        <div className="add-to-cart" onClick={handleAddToCart}>
          <img src="./icon-cart.svg" alt="icon-cart" />
          <p className="add-to-cart-btn">Add to cart</p>
        </div>
      </div>
    </>
  );
}

export default AddToCart;  