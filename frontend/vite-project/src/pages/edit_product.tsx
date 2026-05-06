import {useState, useEffect} from "react";
import {edit_product, get_products_id} from "../services/product_services";
import {Link, useNavigate, useParams} from "react-router";

export function EditProduct(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [stock_quantity, setStock] = useState<number | "">("");

    useEffect(() => {
        if (!id) return;
        get_products_id(id)
        .then((data) => {
            setName(data.name);
            setDescription(data.description || "");
            setPrice(data.price);
            setStock(data.stock_quantity);
        })
        .catch((error) => console.error(error));        
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!id) return;

        await edit_product(id, {
            name,
            description,
            price,
            stock_quantity,
        });
        navigate(`/products/${id}`);
    };

    
    return (
    <div>
        <div>
      <h1>Editar produto</h1>

      <Link to="/products">Voltar para a lista de produtos</Link>

    </div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nome do produto"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                name="description"
                placeholder="Descrição do produto"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                type="number"
                name="price"
                placeholder="Preço do produto"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <input
                type="number"
                name="stock_quantity"
                placeholder="Estoque do produto"
                value={stock_quantity}
                onChange={(event) => setStock(Number(event.target.value))}
            />

            <button type="submit">Atualizar Produto</button>
            <Link to={`/products/${id}`}>
                <button type="button">
                    Cancelar
                </button>
            </Link>
        </form>
    </div>
    );
}