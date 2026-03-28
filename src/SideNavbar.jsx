function SideNavbar({ setShowMenu }) {
  return (
    <div className="side-navbar">
      <img
        src="./icon-close.svg"
        alt="close"
        className="cross-icon"
        onClick={() => setShowMenu(false)}
      />

      <div className="menu-items-mobile">
        <ul>
          <li className="menu-item-mobile">Collection</li>
          <li className="menu-item-mobile">Men</li>
          <li className="menu-item-mobile">Women</li>
          <li className="menu-item-mobile">About</li>
          <li className="menu-item-mobile">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;