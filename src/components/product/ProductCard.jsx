 import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.price}>₹{product.price}</p>
      <p>⭐ {product.rating}</p>

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
    padding: "20px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  category: {
    color: "#6b7280",
  },
  price: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px 0",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    backgroundColor: "#111827",
    color: "white",
    padding: "10px 16px",
    borderRadius: "10px",
    textDecoration: "none",
  },
};