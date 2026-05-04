import express from "express";
import routes from "./routes/methods";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", routes);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
})