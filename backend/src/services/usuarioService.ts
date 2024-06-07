import {deletar, inserir, listar, pesquisarPorId} from "dao/usuarioDAO";
import {NextFunction, Request, Response, response} from "express";

export async function get(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const usuarios = await listar();

    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
}

export async function buscarPorId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const usuario = await pesquisarPorId(id);

    if(!usuario){
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }

    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
}

export async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const registro = req.body;

    const usuario = await inserir(registro);

    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    res.status(500).send('Erro ao adicionar usuário');
  }
}

export async function excluir(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const usuario = await pesquisarPorId(id);

    if(!usuario) {
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }

    await deletar(usuario);

    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).send('Erro ao excluir usuário');
  }
}
