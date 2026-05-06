import {useEffect, useState} from "react";
import {get_products} from "../services/product_services";
import {Link} from "react-router";

export function ProductPages() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    get_products()
    .then((Data) => setProducts(Data))
    .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      <Link to="/insertproduct">Inserir Produto</Link>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
