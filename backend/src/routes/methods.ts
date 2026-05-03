import { Router } from "express";
import { insert_product, get_products, get_product_id, update_product, delete_product } from "../controllers/products_controller";
import { product_schema, product_update_schema } from "../validators/product_validator"
const router = Router();


//metodo para inserir dados no banco de dados
router.post('/insertproducts', async (req, res) => {
    try {
        const data = product_schema.parse(req.body);
        const products = await insert_product(data);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao inserir produto' });
    }
});

//metodo para listar os produtos do banco
router.get('/', async (req, res) => {
    try {
        const products = await get_products();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }
});

//metodo para retornar um produto
router.get('/:id', async (req, res) =>{
    const {id} = req.params;
    try {
        const product = await get_product_id(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
})

//editando conteudo do produto
router.put('/edit/:id', async (req, res) => {
    try {
        const data = product_update_schema.parse(req.body);
        const product = await update_product(req.params.id, data);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
}
})
 
//metodo para deletar
router.delete('/delete/:id', async (req, res) => {
    try {
        await delete_product(req.params.id);
        res.json({ message: "Produto deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

export default router;