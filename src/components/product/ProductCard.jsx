  import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.price}>₹{product.price}</p>
      <p style={styles.rating}>⭐ {product.rating}</p>

      <Link to={`/product/${product.id}`} style={styles.button}>
        View Details
      </Link>
    </div>
  );
}

export default React.memo(ProductCard);

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "14px",
    display: "block",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 10px",
    lineHeight: "1.3",
    wordBreak: "break-word",
  },

  category: {
    color: "#6b7280",
    fontSize: "15px",
    margin: "0 0 8px",
  },

  price: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "8px 0",
    color: "#111827",
  },

  rating: {
    fontSize: "15px",
    margin: "0 0 14px",
    color: "#111827",
  },

  button: {
    display: "inline-block",
    marginTop: "6px",
    backgroundColor: "#111827",
    color: "white",
    padding: "10px 16px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
  },
};