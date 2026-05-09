import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();  

async function main(){
    const productsCount = await prisma.products.count()

    if(productsCount > 0){
        console.log("Produtos já existem no banco de dados. Pulando seeding.");
        return;     
    } await prisma.products.createMany({
        data: [
            {name: "Mousepad", description:"Mousepad gamer 30x70 centimetros preto", price: 27.48, stock_quantity: 100},
            {name: "Teclado", description: "Teclado mecânico 60% RGB", price: 150.00, stock_quantity: 20},
            {name: "Monitor", description: "Monitor 24 polegadas Full HD", price: 799.89, stock_quantity: 3}
        ]
    });
    console.log("Produtos inseridos com sucesso.");
}

    main()
    .catch((error) => {
        console.error("Erro ao inserir produtos:", error);
    })
    .finally(async () => {
        await prisma.$disconnect(); 
    });