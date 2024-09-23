import ProductData from "@/components/adminPage/ProductData";
import ProductForm from "@/components/adminPage/ProductForm";
import { fetchProducts } from "@/lib/data";

const ProductsPage = async () => {
  const fetchedProducts = await fetchProducts();

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ProductForm />
      <ProductData initialProducts={fetchedProducts} />
    </div>
  );
};

export default ProductsPage;
