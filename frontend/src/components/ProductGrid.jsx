import React from "react";
import ProductCard from "./ProductCard";

// Import coffee images
import espresso from "../assets/images/espresso.jpg";
import latte from "../assets/images/latte.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";

export default function ProductGrid() {
  const products = [
    { name: "Espresso", image: espresso, price: 3.5 },
    { name: "Latte", image: latte, price: 4.5 },
    { name: "Cappuccino", image: cappuccino, price: 4.0 },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
