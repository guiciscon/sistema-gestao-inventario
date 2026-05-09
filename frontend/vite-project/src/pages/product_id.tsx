import {useEffect, useState} from "react";
import {get_products_id, delete_product} from "../services/product_services";
import {useParams, Link, useNavigate} from "react-router-dom";
import type {Product} from "../types/product";
import { Layout } from "../components/layout";

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
    <Layout>
        <h1 className="text-center text-3xl font-bold text-blue-600">{product.name}</h1>
        <p>
          <span className="font-bold text-blue-600">ID: </span> {product.id}
        </p>
        <p>
          <span className="font-bold text-blue-600">Descrição: </span> {product.description}
        </p>
          <div className="flex gap-10">
            <div>
              <span className="font-bold text-blue-600">Preço:</span>{" "}{Number(product.price).toLocaleString("pt-BR", {
              style: "currency", currency: "BRL",})}
            </div>
            <div>
              <span className="font-bold text-blue-600">Estoque:</span>{" "}{product.stock_quantity}
            </div>
          </div>
          <div className="flex gap-10">
              <div>
                <span className="font-bold text-blue-600">Criado em: </span> {new Date(product.created_at).toLocaleDateString()}
              </div>
              <div>
                <span className="font-bold text-blue-600">Atualizado em: </span> {new Date(product.last_update).toLocaleDateString()}
              </div>
          </div>
        

      <div className="flex gap-4 mt-4 mb-4">
          <Link className="bg-gray-900 hover:bg-indigo-500 text-white font-bold py-1 px-4 rounded" to="/products">Voltar</Link>
          <Link className="bg-gray-900 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded" to={`/edit/${product.id}`}>Editar</Link>
          <button className="bg-gray-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={handleDelete}>Excluir</button>
      </div>
    </Layout>
  );
}
