import { useState } from "react";
import SideNavbar from "./SideNavbar";
import Cart from "./Cart";

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
            {cart.quantity != 0 && <div className="cart-items-count">{cart.quantity}</div>}
           
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

export default Navbar;