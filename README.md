# sistema-gestao-inventario

*TECNOLOGIAS UTILIZADAS*
- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Zod
- React
- Vite
- Tailwind CSS
- Docker

*FUNCIONALIDADES*
- Cadastro de produtos
- Listagem de produtos
- Visualização de produto por ID
- Edição de produtos
- Exclusão de produtos
- Validação dos dados de entrada (cadastro e edição)

*REQUISITOS PARA RODAR O PROJETO*

Docker instalado e funcionando 

  **COMO RODAR**
  - Na raiz do projeto execute: docker compose up --build
  - Após a subida dos containers abra no navegador: 
    - Frontend: http://localhost:5173
    - Backend:  http://localhost:3000


*ROTAS*
GET - /products
GET (apenas um produto) - /products/:id
POST - /insertproduct
PUT - /edit/:id
DELETE - /delete/:id

*DECISÔES TÉCNICAS*
- Prisma: utilizado como ORM para facilitar a comunicação com o banco de dados e melhorar a produtividade no desenvolvimento, por gerar códigos automaticamente pareceu ideal para a ocasião (pouco tempo pessoal disponível).
- React: utilizado parar criar uma interface dinâmica e componentizada, além de eu também ter um breve conhecimento sobre.
- Zod: Validação e tipagem automática, ajuda a prevenir erros e bus no desenvolvimento.
- Tailwind CSS: utilizado para agilizar a estilização, suas "formulas" prontas ajudaram na estilização e adiantaram o processo.


**# COMANDOS PARA UTILIZAR NO BACKEND VIA TERMINAL #**

**ABRIR TABELA NO NAVEGADOR**

- npx prisma studio 

**INICIAR DOCKER**

- docker compose up --build

**SCRIPT PARA ADICIONAR PRODUTAS NA LISTA**

Invoke-RestMethod -Uri http://localhost:3000/insertproducts `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Mesa",
  "description": "Mesa dobravel",
  "price": 200,
  "stock_quantity": 0
}'

**COMANDO PARA RETORNAR TABELA**

- Invoke-RestMethod -Uri http://localhost:3000/ -Method GET

**COMANDO PARA RETORNAR ITEM (SUBSTITUIR ASTERISTICOS PELO ID DO ITEM)**

- Invoke-RestMethod -Uri http://localhost:3000/** -Method GET

**COMANDO PARA ATUALIZAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**

Invoke-RestMethod -Uri http://localhost:3000/edit/** `
-Method PUT `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Hub USB",
  "description": "Hub USB 5 entradas 3.0",
  "price": 57.89,
  "stock_quantity": 6
}'

**COMANDO PARA DELETAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**

- Invoke-RestMethod -Uri http://localhost:3000/delete/** -Method DELETE
