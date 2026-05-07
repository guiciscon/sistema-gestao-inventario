import {Link} from "react-router-dom";
import { Layout } from "../components/layout";

export function Home() {
    return (
        <Layout>
            <h1 className="text-center text-3xl font-bold text-blue-600">Sistema de Gestão de Inventário</h1>
            <div className="flex gap-4 mt-4 mb-4 justify-center">
                <Link className="bg-gray-900 hover:bg-indigo-500 text-white font-bold py-1 px-4 rounded" to='/products'>Ver lista de produtos </Link>
                <Link className="bg-gray-900 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded" to='/insertproduct'>Inserir novos produtos</Link>
            </div>
        </Layout>
    )
}
