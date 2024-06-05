import {deletar, inserir, listar, pesquisarPorId} from "dao/pessoaDAO";
import {NextFunction, Request, Response, response} from "express";

export async function get(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const pessoas = await listar();

    res.status(200).json(pessoas);
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

    const pessoa = await pesquisarPorId(id);

    if(!pessoa){
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }

    res.status(200).json(pessoa);
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

    const pessoa = await inserir(registro);

    res.status(201).json(pessoa);
  } catch (error) {
    next(error);
  }
}

export async function excluir(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const pessoa = await pesquisarPorId(id);

    if(!pessoa) {
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }

    await deletar(pessoa);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
