import "./Wishlist.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <MainLayout>
      <div className="wishlist-container">
        <h1 className="wishlist-heading">
          My Wishlist <span>{wishlistItems.length} items</span>
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="wishlist-empty">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                {/* ❌ Top right remove icon */}
                 <button
  className="wishlist-remove-icon"
  onClick={() => dispatch(removeFromWishlist(item.id))}
>
  <X size={28} strokeWidth={3} />
</button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />

                <div className="wishlist-info">
                  <h3 className="wishlist-name">{item.name}</h3>
                  <p className="wishlist-category">{item.category}</p>
                  <p className="wishlist-price">₹{item.price}</p>
                  <p className="wishlist-rating">⭐ {item.rating}</p>

                  <div className="wishlist-buttons">
                    <Link to={`/product/${item.id}`} className="wishlist-view-btn">
                      View
                    </Link>

                    <button
                      className="wishlist-cart-btn"
                      onClick={() => handleMoveToCart(item)}
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Wishlist;

 