import {inserir, listar} from "dao/pessoaDAO";
import {NextFunction, Request, Response} from "express";

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
