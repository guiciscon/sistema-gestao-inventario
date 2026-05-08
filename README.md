# sistema-gestao-inventario
Sistema de gestão de inventário fullstack.

**### DIRETRIZES GERAIS ###**

- Sempre iniciar o projeto no backend e no frontend separadamente

Decisões tomadas: 

- ORM/Querry Builder: Supostamente mais facil de usar, utiliza menos códigos manuais e gera mais automáticamente (levando 
em consideração meu tempo disponivel entre trabalho, estudos e tarefas de casa parecia mais adquado)
- API: Express foi o que eu aprendi no curso de NodeJS do Matheus Battisti e novamente, levando em consideração o tempo que 
eu teria disponível pareceu mais adequado pois ja teria outras ferramentas para aprender.
- Validação: ZOD, levei em consideração que a tipagem é automatica e ajuda a previnir erros, como esse é basicamente o 
primeiro projeto que faço imaginei que teria dificuldade nisso porém foi uma das partes mais tranquilas.
- Estilização: Tailwind CSS por não precisar escrever o CSS manualmente e ter uma boa quantidade de padrões e "formulas"
prontas agilizou bastante o processo (e de novo, nunca tinha feito isso então foi basicamente a primeira vez que fiz um
fronend na minha vida)

**ABRIR TABELA NO NAVEGADOR (ENQUANTO NAO EXISTE FRONTEND É BOM)**

- npx prisma studio 

**RODA O SISTEMA E ATUALIZA AUTOMATICAMENTE (USAR NO /backend E /frontent/vite-project)**

- npm run dev 

**INICIAR DOCKER**

- docker compose up --build

**@@@ COMANDO BACKEND (USAR NO TERMINAL) @@@**

**SCRIPT PARA ADICIONAR PRODUTAS NA LISTA (VIA TERMINAL)**

Invoke-RestMethod -Uri http://localhost:3001/products/insertproducts `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Teste",
  "description": "",
  "price": 2.00,
  "stock_quantity": 2
}'

**COMANDO PARA RETORNAR TABELA VIA TERMINAL**

- Invoke-RestMethod -Uri http://localhost:3001/products -Method GET

**COMANDO PARA RETORNAR ITEM VIA TERMINAL (SUBSTITUIR ASTERISTICOS PELO ID DO ITEM)**

- Invoke-RestMethod -Uri http://localhost:3001/products/** -Method GET

**COMANDO PARA ATUALIZAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**

Invoke-RestMethod -Uri http://localhost:3001/products/edit/**`
-Method PUT `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Hub USB",
  "description": "Hub USB 5 entradas 3.0",
  "price": 57.898888,
  "stock_quantity": 6
}'

**COMANDO PARA DELETAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**

- Invoke-RestMethod -Uri http://localhost:3001/products/delete/ -Method DELETE
