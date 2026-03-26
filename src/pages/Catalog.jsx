//   import { useSelector, useDispatch } from "react-redux";
// import {
//   filterByCategory,
//   filterByPrice,
//   resetFilters,
// } from "../features/products/productsSlice";

// function Catalog() {
//   const products = useSelector((state) => state.products.filtered);
//   const dispatch = useDispatch();

//   // 🔥 Safety check
//   if (!products) return <h1>Loading products...</h1>;

//   return (
//     <div>
//       <h1>Product Catalog</h1>

//       <button onClick={() => dispatch(filterByCategory("Electronics"))}>
//         Electronics
//       </button>
//       <button onClick={() => dispatch(filterByPrice(100))}>
//         Under $100
//       </button>
//       <button onClick={() => dispatch(resetFilters())}>
//         All
//       </button>

//       <div className="grid">
//         {products.map((p) => (
//           <div key={p.id} className="card">
//             <h3>{p.name}</h3>
//             <p>${p.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Catalog;

import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../features/products/productsSlice";
import MainLayout from "../components/layout/MainLayout";
import ProductCard from "../components/product/ProductCard";

function Catalog() {
  const products = useSelector((state) => state.products.filtered);
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <h1 style={{ marginBottom: "20px" }}>Product Catalog</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
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
    </MainLayout>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
};

export default Catalog;