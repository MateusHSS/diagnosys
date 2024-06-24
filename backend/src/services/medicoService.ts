import {deletarMedico, criarMedico, listarMedicos, buscarMedico} from "dao/medicoDAO";
import {listarRegistros, criarRegistro} from "dao/registroDAO";
import {NextFunction, Request, Response} from "express";

export async function listaMedicos(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const medicos = await listarMedicos();

    if (medicos.length > 0) {
      res.status(200).json(medicos);
    } else {
      res.status(404).send('Não há nenhum medico cadastrado');
    }
    
  } catch (error) {
    console.error('Erro ao listar os medicos:', error);
    res.status(500).send('Erro ao listar os medicos');
    next(error);
  }
}

export async function buscaMedico(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const pessoa = await buscarMedico(id);

    if(!pessoa){
      res.status(404).json({mensagem: 'Medico não encontrado!'})
    }
    else {
      res.status(200).json(pessoa);
    }
    
  } catch (error) {
    console.error('Erro ao buscar medico:', error);
    res.status(500).send('Erro ao buscar medico');
    next(error);
  }
}

export async function criaMedico(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const dados = req.body;

    const medico = await criarMedico(dados);

    res.status(201).json(medico);

  } catch (error) {
    console.error('Erro ao adicionar medico:', error);
    res.status(500).send('Erro ao adicionar medico');
    next(error);
  }
}

export async function deletaMedico(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const medico = await buscarMedico(id);

    if(!medico) {
      res.status(404).json({mensagem: 'Medico não encontrado!'})
    }
    else {
      await deletarMedico(medico);
      res.status(200).json({ mensagem: `Medico ${medico.crm} removida com sucesso!` });
    }

  } catch (error) {
    console.error('Erro ao excluir medico:', error);
    res.status(500).send('Erro ao excluir medico');
    next(error);
  }
}

export async function listaRegistros(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const registro = await listarRegistros(id);

    if (registro.length > 0) {
      res.status(200).json(registro);
    } else {
      res.status(404).send('Nenhum registro encontrado para o usuário fornecido');
    }
  } catch (error) {
    console.error('Erro ao listar os registros:', error);
    res.status(500).send('Erro ao listar os registros');
    next(error);
  }
}

export async function criaRegistro(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const dados = req.body;

    const registro = await criarRegistro(dados);

    res.status(201).json(registro);

  } catch (error) {
    console.error('Erro ao adicionar registro:', error);
    res.status(500).send('Erro ao adicionar registro');
    next(error);
  }
}