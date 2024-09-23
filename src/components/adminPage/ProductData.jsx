"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { deleteProductByID } from "@/lib/action";

const ProductData = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [filterText, setFilterText] = useState("");
  const [filterCategory, setFilterCategory] = useState(""); // Category filter
  const [IsOptimised, setOptimised] = useState(true);
  console.log(products, initialProducts);
  // Get unique categories for the category filter dropdown
  const categories = [
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  // Delete product function
  const deleteProduct = async (productId) => {
    try {
      // Simulate backend call to delete the product
      const response = await deleteProductByID(productId);
      if (response) {
        // Optionally, revalidate the path if using Next.js Server Actions
        // revalidatePath("/admin/products");

        toast.success("Product deleted successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  // Filter products based on filterText and filterCategory
  const filteredProducts = products.filter((product) => {
    const matchesText = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesCategory =
      !filterCategory || product.category === filterCategory;
    return matchesText && matchesCategory;
  });

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Product List</h2>

      {/* Filter Inputs */}
      <div className="flex gap-4 mb-6">
        {/* Text Filter */}
        <input
          type="text"
          placeholder="Filter by name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        {/* Category Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul className="space-y-4">
          {filteredProducts.map((product, index) => (
            <li
              key={product._id || index}
              className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4"
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  width={200}
                  height={200}
                  src={product.image} // Assuming image URL is stored in the 'image' field
                  alt={product.name}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold">{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>{product.description}</p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductData;
