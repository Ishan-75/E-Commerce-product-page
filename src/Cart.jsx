function Cart() {
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
            <img
              className="cart-inc-btn cart-btn"
              src="./icon-minus.svg"
              alt="decrement  "
            />
            <p className="cart-items">0</p>
            <img
              className="cart-dec-btn cart-btn"
              src="./icon-plus.svg"
              alt="increment"
            />
          </div>
        </div>
        <div className="add-to-cart">
          <img src="./icon-cart.svg" alt="icon-cart" />
          <p className="add-to-cart-btn">Add to cart</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
