import { useState } from "react";
import SideNavbar from "./SideNavbar";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && (
        <>
          <div className="overlay" onClick={() => setShowMenu(false)}></div>
          <SideNavbar setShowMenu={setShowMenu} />
        </>
      )}

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
          <img
            className="cart-icon icon"
            src="./icon-cart.svg"
            alt="cart-icon"
          />
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
