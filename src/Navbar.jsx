import { useState } from "react";
import SideNavbar from "./SideNavbar";


function Navbar({ cart, showCart, setShowCart }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  return (
    <>
      {showMenu && (
        <>
          <div className="overlay" onClick={() => setShowMenu(false)}></div>
          <SideNavbar setShowMenu={setShowMenu} />
        </>
      )}

      {showCart && <Cart cart={cart} />}

      <div className="navbar">
        <div>
          <img
            className="menu-icon icon"
            src="./icon-menu.svg"
            alt="menu-icon"
            onClick={() => setShowMenu(true)}
          />

          <p className="app-name">sneakers</p>

          <div className="menu-items">
            <li className="menu-item">Collection</li>
            <li className="menu-item">Men</li>
            <li className="menu-item">Women</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Contact</li>
          </div>
        </div>

        <div>
          <div>
            <img
              className="cart-icon icon"
              src="./icon-cart.svg"
              alt="cart-icon"
              onClick={toggleCart}
            />
            {cart.quantity !== 0 && <div className="cart-items-count">{cart.quantity}</div>}
           
            </div>
          <img
            className="profile-icon icon"
            src="./image-avatar.png"
            alt="profile-icon"
          />
        </div>
      </div>
    </>
  );
}

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
        </div>
    );
}
export default Navbar;