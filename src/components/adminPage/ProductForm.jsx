"use client";
import { addProduct } from "@/lib/action";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const ProductForm = () => {
  const [state, formAction] = useFormState(addProduct, undefined);
  useEffect(() => {
    if (state?.error) {
      toast.error("error");
    }
  }, [state]);

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold mb-2">Add New Product</h2>
        {/* Input fields for adding a product */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="rounded-lg p-3 border border-gray-300"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="rounded-lg p-3 border border-gray-300"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="rounded-lg p-3 border border-gray-300"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="rounded-lg p-3 border border-gray-300"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="rounded-lg p-3 border border-gray-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
