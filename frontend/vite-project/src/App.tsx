import { productPages as ProductPages } from "./pages/product_pages";
import { insertProduct as InsertProduct } from "./pages/insert_product";

export default function App() {
  return (
    <div>
      <InsertProduct />
      <ProductPages />
    </div>
  );
}