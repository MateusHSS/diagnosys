import {deletarUsuario, criarUsuario, listarUsuarios, buscarUsuario, listarRegistros, criarRegistro} from "dao/usuarioDAO";
import {NextFunction, Request, Response} from "express";

export async function listaUsuarios(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const usuarios = await listarUsuarios();

    if (usuarios.length > 0) {
      res.status(200).json(usuarios);
    } else {
      res.status(404).send('Não há nenhum usuário cadastrado');
    }

  } catch (error) {
    console.error('Erro ao listar os usuários:', error);
    res.status(500).send('Erro ao listar os usuários');
    next(error);
  }
}

export async function buscaUsuario(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const usuario = await buscarUsuario(id);

    if(!usuario){
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
    else {
      res.status(200).json(usuario);
    }
    
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).send('Erro ao buscar usuário');
    next(error);
  }
}

export async function criaUsuario(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const dados = req.body;

    const usuario = await criarUsuario(dados);

    res.status(201).json(usuario);

  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    res.status(500).send('Erro ao adicionar usuário');
    next(error);
  }
}

export async function deletaUsuario(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {id} = req.params;

    const usuario = await buscarUsuario(id);

    if(!usuario) {
      res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
    else {
      await deletarUsuario(usuario);
      res.status(200).json({ mensagem: `Usuário ${usuario.login} removido com sucesso!` });
    }

  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).send('Erro ao excluir usuário');
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