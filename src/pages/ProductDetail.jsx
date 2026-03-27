 import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import products from "../api/products.json";
 
function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      
        <h2>Product not found</h2>
      
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    alert("Product added to wishlist!");
  };

  return (
    
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        <div style={styles.right}>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.category}>{product.category}</p>
          <h2 style={styles.price}>₹{product.price}</h2>
          <p style={styles.rating}>⭐ {product.rating}</p>
          <p style={styles.description}>
            {product.description ||
              "This is a premium quality product designed for modern shopping experiences."}
          </p>

          <div style={styles.buttonGroup}>
            <button style={styles.cartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button style={styles.wishlistBtn} onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default ProductDetail;

const styles = {
  container: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "20px 10px",
  },
  left: {
    flex: 1,
    minWidth: "320px",
  },
  right: {
    flex: 1,
    minWidth: "320px",
  },
  image: {
    width: "100%",
    borderRadius: "24px",
    objectFit: "cover",
    maxHeight: "520px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  category: {
    color: "#6b7280",
    fontSize: "18px",
    marginBottom: "20px",
  },
  price: {
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "18px",
  },
  rating: {
    fontSize: "20px",
    marginBottom: "25px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#111827",
    marginBottom: "35px",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  cartBtn: {
    backgroundColor: "#0f172a",
    color: "white",
    border: "none",
    padding: "16px 28px",
    borderRadius: "14px",
    fontSize: "20px",
    cursor: "pointer",
  },
  wishlistBtn: {
    backgroundColor: "#db2777",
    color: "white",
    border: "none",
    padding: "16px 28px",
    borderRadius: "14px",
    fontSize: "20px",
    cursor: "pointer",
  },
};