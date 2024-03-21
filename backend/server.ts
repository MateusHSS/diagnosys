import express, {Express} from "express";
import dotenv from "dotenv";
import pessoaController from "@controllers/pessoaController";
import db from "@config/db";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(pessoaController);

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);

  try {
    db.authenticate().then(() => {
      console.log("Conectado com sucesso no banco de dados");
    });
  } catch (error) {
    console.error("Erro ao conectar no banco de dados: ", error);
  }
});
