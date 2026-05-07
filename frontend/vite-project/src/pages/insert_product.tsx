import {useState} from "react";
import {insert_product} from "../services/product_services";
import {Link, useNavigate} from "react-router-dom";
import { Layout } from "../components/layout";

export function InsertProduct() {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [stock_quantity, setStock] = useState<number | "">("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    try{
        await insert_product({
            name,
            description,
            price,
            stock_quantity,
        });
        navigate("/products");
    } catch (error) {
        console.error(error);
        setMessage("Erro ao cadastrar produto. Verifique os dados informados.");
        setMessageType("error");
    };
};

    
    return (
    <Layout>
        <div>
      <h1 className="text-2xl font-bold text-blue-600">Inserir produto</h1>
      
      <div className="mt-2 mb-4">
        <Link className="bg-gray-900 hover:bg-indigo-500 text-white font-bold py-1 px-4 rounded" to="/products">Lista de produtos</Link>
      </div>
      

    </div>
    {message &&(
        <div className={'mb-4 rounded px-4 py-2 text-white' + (messageType === "success" ? "bg-green-200" : "bg-red-200")}
        >
            {message}
        </div>
    )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 max-w-md">
            <input className="border rounded px-3 py-2"
                type="text"
                name="name"
                placeholder="Nome do produto"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input className="border rounded px-3 py-2"
                type="text"
                name="description"
                placeholder="Descrição do produto"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input className="border rounded px-3 py-2"
                type="number"
                name="price"
                placeholder="Preço do produto"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <input className="border rounded px-3 py-2"
                type="number"
                name="stock_quantity"
                placeholder="Estoque do produto"
                value={stock_quantity}
                onChange={(event) => setStock(Number(event.target.value))}
            />

            <button type="submit" className="bg-gray-900 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded">
                    Cadastrar produto
                </button>
        </form>
    </Layout>
    );
}
