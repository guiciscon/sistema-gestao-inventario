import {ProductPages as ProductPages} from "./pages/product_pages";
import {InsertProduct as InsertProduct} from "./pages/insert_product";
import {ProductPagesId} from "./pages/product_id";
import {EditProduct} from "./pages/edit_product";
import {Routes, Route} from "react-router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/insertproduct" element={<InsertProduct />} />
        <Route path="/products" element={<ProductPages />} />
        <Route path="/products/:id" element={<ProductPagesId />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}