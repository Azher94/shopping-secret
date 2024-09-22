"use client";
import { useState } from "react";
import { PRODUCTS as productData } from "@/lib/helpers/contants";
import MenuCard from "@/components/menuPage/MenuCard";
import Basket from "@/components/menuPage/Basket";
import Filter from "@/components/menuPage/Filter";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Pagination settings
const ITEMS_PER_PAGE = 3;

export default function Menu() {
  const [cart, setCart] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartVisible, setCartVisible] = useState(false);

  // Add product to cart
  const addToCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productName]) {
        updatedCart[productName] += 1;
      } else {
        updatedCart[productName] = 1;
      }
      return updatedCart;
    });
  };

  // Remove product from cart
  const removeFromCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productName] > 1) {
        updatedCart[productName] -= 1;
      } else {
        delete updatedCart[productName];
      }
      return updatedCart;
    });
  };

  // Delete product from cart
  const deleteFromCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productName];
      return updatedCart;
    });
  };
  const totalItemsInCart = Object.values(cart).reduce(
    (total, count) => total + count,
    0
  );

  // Get categories for filtering
  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  // Filter products by category
  const filteredProducts = selectedCategory
    ? productData.filter((product) => product.category === selectedCategory)
    : productData;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Handle pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <div className=" w-screen h-screen mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>

      {/* Filter Component */}
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Product Listing with Pagination */}
      <div className="grid grid-rows-1  gap-6">
        {paginatedProducts.map((product) => (
          <MenuCard
            key={product.name}
            product={product}
            addToCart={addToCart}
            cartCount={cart[product.name] || 0}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center m-6 pb-5">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Basket Component */}
      {cartVisible && (
        <Basket
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
          userId="1234" // Pass userId dynamically as needed
        />
      )}
      <button
        className="py-2 px-4 rounded absolute top-5 right-5 z-50 hover:text-content hover:scale-150 ease-in-out transition duration-500 flex items-center space-x-2"
        onClick={toggleCartVisibility}
      >
        {cartVisible ? (
          <ImCross className="h-8 w-8" />
        ) : (
          <>
            <FaShoppingCart className="h-8 w-8" />
            <div className="text-black font-bold text-lg">
              {totalItemsInCart}
            </div>
          </>
        )}
      </button>
    </div>
  );
}
