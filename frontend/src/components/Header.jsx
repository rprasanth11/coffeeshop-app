import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-700">☕ CoffeeShop</h1>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-amber-600">Home</a>
          <a href="#menu" className="hover:text-amber-600">Menu</a>
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
