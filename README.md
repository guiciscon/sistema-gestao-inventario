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

- ORM/Querry Builder: Supostamente mais facil de usar, utiliza menos códigos manuais e gera mais automáticamente (levando 
em consideração meu tempo disponivel entre trabalho, estudos e tarefas de casa parecia mais adquado)
- API: Express foi o que eu aprendi no curso de NodeJS do Matheus Battisti e novamente, levando em consideração o tempo que 
eu teria disponível pareceu mais adequado pois ja teria outras ferramentas para aprender.
- Validação: ZOD, levei em consideração que a tipagem é automatica e ajuda a previnir erros, como esse é basicamente o 
primeiro projeto que faço imaginei que teria dificuldade nisso porém foi uma das partes mais tranquilas.
- Estilização: Tailwind CSS por não precisar escrever o CSS manualmente e ter uma boa quantidade de padrões e "formulas"
prontas agilizou bastante o processo (e de novo, nunca tinha feito isso então foi basicamente a primeira vez que fiz um
fronend na minha vida)


**# COMANDOS PARA UTILIZAR NO BACKEND VIA TERMINAL #**

**ABRIR TABELA NO NAVEGADOR (ENQUANTO NAO EXISTE FRONTEND É BOM)**

- npx prisma studio 

**RODA O SISTEMA E ATUALIZA AUTOMATICAMENTE (USAR NO /backend E /frontent/vite-project)**

- npm run dev 

**INICIAR DOCKER**

- docker compose up --build

**@@@ COMANDO BACKEND (USAR NO TERMINAL) @@@**

**SCRIPT PARA ADICIONAR PRODUTAS NA LISTA (VIA TERMINAL)**

Invoke-RestMethod -Uri http://localhost:3000/insertproducts `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Mesa",
  "description": "Mesa dobravel",
  "price": 200,
  "stock_quantity": 0
}'

**COMANDO PARA RETORNAR TABELA VIA TERMINAL**

- Invoke-RestMethod -Uri http://localhost:3000/ -Method GET

**COMANDO PARA RETORNAR ITEM VIA TERMINAL (SUBSTITUIR ASTERISTICOS PELO ID DO ITEM)**

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
