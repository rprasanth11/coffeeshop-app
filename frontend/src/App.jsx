import React from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import SpecialOffer from "./components/SpecialOffer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="text-center py-16 bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to CoffeeShop ☕</h1>
        <p className="mt-4 text-lg">
          Freshly brewed happiness, made just for you
        </p>
      </section>

      {/* Product Grid */}
      <main className="p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Menu</h2>
        <ProductGrid />
      </main>

      {/* Special Offer Section */}
      <SpecialOffer />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-12">
        <p>© 2025 CoffeeShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
