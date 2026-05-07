import {useEffect, useState} from "react";
import {get_products} from "../services/product_services";
import {Link} from "react-router-dom";
import { Layout } from "../components/layout";
//import {Layout} from "../components/layout";

interface Product {
  id: number;
  name: string;
}

export function ProductPages() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    get_products()
    .then((Data) => setProducts(Data))
    .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
       <h1 className="text-center text-3xl font-bold text-blue-600">Produtos</h1>
       <div className="text-center mb-4 mt-4">
                <Link className="bg-gray-900 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded" to='/insertproduct'>Inserir produto</Link>
            </div>
      <ul>
        {products
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((product: Product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
