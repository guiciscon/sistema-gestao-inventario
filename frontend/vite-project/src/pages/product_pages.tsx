import {useEffect, useState} from "react";
import {get_products} from "../services/product_services";

export function productPages() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    get_products()
    .then((Data) => setProducts(Data))
    .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
