 
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../features/products/productsSlice";

import ProductCard from "../components/product/ProductCard";

function Catalog() {
  const products = useSelector((state) => state.products.filtered);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Catalog</h1>

      <div style={styles.filters}>
        <button onClick={() => dispatch(filterByCategory("Electronics"))}>
          Electronics
        </button>

        <button onClick={() => dispatch(filterByCategory("Clothing"))}>
          Clothing
        </button>

        <button onClick={() => dispatch(filterByPrice(2000))}>
          Under ₹2000
        </button>

        <button onClick={() => dispatch(resetFilters())}>
          All
        </button>
      </div>

      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;

const styles = {
  container: {
    padding: "10px 0",
  },

  title: {
    marginBottom: "20px",
  },

  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
};