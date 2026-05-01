import express from "express";
import routes from "./routes/methods";


const app = express();
app.use(express.json());
app.use("/products", routes);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
})