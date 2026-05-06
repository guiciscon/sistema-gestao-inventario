import {useEffect, useState} from "react";
import {get_products_id, delete_product} from "../services/product_services";
import {useParams, Link, useNavigate} from "react-router";
import type {Product} from "../types/product";

export function ProductPagesId() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  
  const handleDelete = () => {
    if (!id) return;
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
    if (!confirmDelete) return;
    delete_product(id);
    navigate("/products");
  }

  useEffect(() => {
    if (!id) return;

    get_products_id(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
        <h1>{product.name}</h1>
        <p>ID: {product.id}</p>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <p>Estoque: {product.stock_quantity}</p>
        <p>Criado em: {new Date(product.created_at).toLocaleDateString()}</p>

      <Link to="/products">
      <button>
        Voltar
      </button></Link>
      <Link to={`/edit/${product.id}`}>
        <button>
          Editar
        </button>
      </Link>
      <button onClick={handleDelete}>
        Excluir
      </button>
      
    </div>
  );
}
