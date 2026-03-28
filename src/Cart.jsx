function Cart({ cart }) {
    const total = cart.quantity * cart.price;

    return (
        <div className="cart-container">
            <h1 className="cart-header">Cart</h1>



            {cart.quantity === 0 ? (
                <div className="in-cart-items">
                    <p>Your cart is empty.</p></div>
            ) : (
                <div><div className="cart-item">
                    <img src="./image-product-1.jpg" alt="product1" className="product-img-incart" />
                    <div className="product-details-incart">
                        <p className="product-name-incart">Fall Limited Edition Sneakers</p>
                        <p>
                            $ {cart.price} x {cart.quantity}

                            <span className="total-price"> ${total}</span>
                        </p>
                    </div>
                </div>

                    <button className="checkout-btn">Checkout</button>
                </div>
            )}



            {/* <div className="in-cart-items">
        {cart.quantity === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <><div className="cart-item">
            <img src="./image-product-1.jpg" alt="product1" className="product-img-incart" />
          </div>
            <p>
              $ {cart.price} x {cart.quantity}
              <strong>$ {total}</strong>
            </p>

            <button>Checkout</button>
          </>
        )}
      </div> */}
        </div>
    );
}

export default Cart;