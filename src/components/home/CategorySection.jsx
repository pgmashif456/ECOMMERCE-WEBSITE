 import React from "react";
import "./CategorySection.css";

const categories = [
  "Electronics",
  "Clothing",
  "Footwear",
  "Accessories",
  "Beauty",
  "Home",
];

function CategorySection() {
  return (
    <section className="category-section">
      <h2 className="category-title">Shop by Category</h2>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <span>{category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;