  import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";

function FeaturedProducts() {
  const products = useSelector((state) => state.products.all);

  return (
    <section>
      <h2 style={styles.heading}>Featured Products</h2>
      <div style={styles.grid}>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
};

export default FeaturedProducts;