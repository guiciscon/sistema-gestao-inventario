import {useState} from "react";
import {insert_product} from "../services/product_services";

export function insertProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [stock_quantity, setStock] = useState<number>(0);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await insert_product({
            name,
            description,
            price,
            stock_quantity,
        });
    };

    return (
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
                type="text"
                name="price"
                placeholder="Preço do produto"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <input
                type="text"
                name="stock_quantity"
                placeholder="Estoque do produto"
                value={stock_quantity}
                onChange={(event) => setStock(Number(event.target.value))}
            />

            <button type="submit">Cadastrar Produto</button>
        </form>
    );
}