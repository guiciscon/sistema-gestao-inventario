import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

//metodo para inserir dados no banco de dados
router.post('/insertproducts', async (req, res) => {
    const {name, description, price, stock_quantity} = req.body;

    try {
        const Product = await prisma.products.create({
            data:{name, description, price, stock_quantity}
        });
    res.json(Product);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao inserir produto' });
}
})

//metodo para listar os produtos do banco
router.get('/', async (req, res) => {
    try {
        const products = await prisma.products.findMany();
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
        const product = await prisma.products.findUnique({
            where: {id: id}
        });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
})

//editando conteudo do produto
router.put('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const {name, description, price, stock_quantity} = req.body;
    try {
        const Product = await prisma.products.update({
            where: {id:id},
            data: req.body
        });
    res.json(Product);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar produto' });
}
})
 
//metodo para deletar
router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const Product = await prisma.products.delete({
            where: {id:id}
        });
        res.json(Product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
})

export default router;