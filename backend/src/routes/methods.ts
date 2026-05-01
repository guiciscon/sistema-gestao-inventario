import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

//metodo para inserir dados no banco de dados
router.post('/insertproducts', async (req, res) => {
    const {name, description, price, stock_quantity} = req.body;

    try {
        const Product = await prisma.products.create({
            data:{
                name,
                description,
                price,
                stock_quantity
            }
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

export default router;