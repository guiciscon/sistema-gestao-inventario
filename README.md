# sistema-gestao-inventario
Sistema de gestão de inventário fullstack.

### COMANDOS ###
**ABRIR TABELA NO NAVEGADOR (ENQUANTO NAO EXISTE FRONTEND É BOM)**
npx prisma studio 

**RODA O SISTEMA E ATUALIZA AUTOMATICAMENTE**
npm run dev 

**SCRIPT PARA ADICIONAR PRODUTAS NA LISTA (VIA TERMINAL)**
Invoke-RestMethod -Uri http://localhost:3001/products/insertproducts `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Teste",
  "description": "",
  "price": 0.00,
  "stock_quantity": -2
}'

**COMANDO PARA RETORNAR TABELA VIA TERMINAL**
Invoke-RestMethod -Uri http://localhost:3001/products -Method GET

**COMANDO PARA RETORNAR ITEM VIA TERMINAL (SUBSTITUIR ASTERISTICOS PELO ID DO ITEM)**
Invoke-RestMethod -Uri http://localhost:3001/products/** -Method GET

**COMANDO PARA ATUALIZAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**
Invoke-RestMethod -Uri http://localhost:3001/products/edit/** `
-Method PUT `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{
  "name": "Mouse atualizado",
  "description": "Nova descrição",
  "price": 200,
  "stock_quantity": 20
}'

c**COMANDO PARA DELETAR ITEM (SUBSTITUIR ASTERISTICO PELO ID DO ITEM)**
Invoke-RestMethod -Uri http://localhost:3001/products/delete/** -Method DELETE
