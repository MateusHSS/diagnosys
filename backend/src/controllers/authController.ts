import {NextFunction, Request, Response, Router} from "express";
import Usuario from "models/usuario";
import jwt from "jsonwebtoken";
import Pessoa from "models/pessoa";
import { criarPessoa } from "dao/pessoaDAO";
import { criarUsuario } from "dao/usuarioDAO";

const router = Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  const {login, senha} = req.body;
  
  const usuario = await Usuario.findOne({where: {login}, include: {model: Pessoa}});

  if(!usuario) res.status(404).send('Usuário ou senha inválidos');
  
  const senhaValida = usuario?.senha == senha;

  if(!senhaValida) res.status(401).send({auth: false, token: null})
  
  const token = jwt.sign({id: usuario?.id}, '47126117', {
    expiresIn: 86400
  });

  res.status(200).send({auth: true, token, user: usuario});
});

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const dados = req.body;

  const pessoa = await criarPessoa(dados);

  dados.idPessoa = pessoa.id;

  const usuario = await criarUsuario(dados);

  const token = jwt.sign({id: usuario.id}, '47126117', {
    expiresIn: 86400
  });

  res.status(200).send({auth: true, token, user: usuario});
})

export default router;