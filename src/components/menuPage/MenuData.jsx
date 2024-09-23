import { fetchProducts } from "@/lib/data";
import MenuPage from "./MenuPage";

const MenuData = async () => {
  const fetchedProducts = await fetchProducts();

  return <MenuPage productData={fetchedProducts} />;
};

export default MenuData;
