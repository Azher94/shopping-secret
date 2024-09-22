// components/MenuCard.js
import { FaShoppingCart } from "react-icons/fa";

export default function MenuCard({ product, addToCart, cartCount }) {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg shadow-md p-4 bg-white">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-800 font-bold mt-2">Price: ${product.price}</p>
      </div>

      {/* Cart Action */}
      <div className="flex items-center space-x-2">
        {/* Cart Icon with Count */}
        {cartCount > 0 && (
          <div className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded-lg">
            <FaShoppingCart className="mr-1" />
            <span>{cartCount}</span>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product.name)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
