import {useState, useEffect} from "react";
import {edit_product, get_products_id} from "../services/product_services";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Layout } from "../components/layout";

export function EditProduct(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [stock_quantity, setStock] = useState<number | "">("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

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
    try{
        await edit_product(id, {
            name,
            description,
            price: Number(price),
            stock_quantity: Number(stock_quantity),
        });
        navigate(`/products/${id}`);
    } catch (error) {
        console.error(error);
        setMessage("Erro ao atualizar produto. Verifique os dados informados.");
        setMessageType("error");
    };
};

    
    return (
    <Layout>
        <div>
      <h1 className="text-lg font-bold text-blue-600">Editar produto</h1>

    </div>
     {message &&(
        <div className={'mb-4 rounded px-4 py-2 text-white' + (messageType === "success" ? "bg-green-200" : "bg-red-200")}
        >
            {message}
        </div>
    )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 max-w-md">
            <label>Nome:</label>
            <input className="border rounded px-3 py-2"
                type="text"
                name="name"
                placeholder="Nome do produto"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label>Descrição:</label>
            <input className="border rounded px-3 py-2"
                type="text"
                name="description"
                placeholder="Descrição do produto"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <label>Preço:</label>
            <input className="border rounded px-3 py-2"
                type="number"
                step="0.01"
                name="price"
                placeholder="Preço do produto"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <label>Estoque:</label>
            <input className="border rounded px-3 py-2"
                type="number"
                name="stock_quantity"
                placeholder="Estoque do produto"
                value={stock_quantity}
                onChange={(event) => setStock(Number(event.target.value))}
            />

            <div className="flex gap-4 mt-4 mb-4">
                <button type="submit" className="bg-gray-900 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded">
                    Atualizar produto
                </button>
                <Link className="bg-gray-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" to={`/products/${id}`}>
                    Cancelar
                </Link>
            </div>
        </form>
    </Layout>
    );
}
