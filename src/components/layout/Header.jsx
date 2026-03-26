  





  import React from "react";
import { Link } from "react-router-dom";
import { UserCircle, ChevronDown, ShoppingCart } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left */}
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>

          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
          />
        </div>

        {/* Right */}
        <div className="header-right">
          <Link to="/" className="header-action">
            <div className="action-inner">
              <span>Home</span>
            </div>
          </Link>

          <Link to="/catalog" className="header-action">
            <div className="action-inner">
              <span>Catalog</span>
            </div>
          </Link>

          <Link to="/wishlist" className="header-action">
            <div className="action-inner">
              <span>Wishlist</span>
            </div>
          </Link>

           
          <div className="header-action">
            <div className="action-inner">
              <span>More</span>
              <ChevronDown size={18} className="dropdown-arrow" />
            </div>
          </div>

          <Link to="/cart" className="header-action cart-link">
            <div className="action-inner">
              <ShoppingCart size={22} className="action-icon" />
              <span>Cart</span>
            </div>
          </Link>

          <Link to="/login" className="header-action">
            <div className="action-inner">
              <UserCircle size={22} className="action-icon" />
              <span>Login</span>
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Header;