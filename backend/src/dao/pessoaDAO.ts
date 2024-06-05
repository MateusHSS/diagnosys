import Pessoa, {PessoaAtributos} from "models/pessoa";

export async function listar(): Promise<Pessoa[]> {
  return await Pessoa.findAll();
}

export async function inserir(registro: PessoaAtributos): Promise<Pessoa> {
  return await Pessoa.create(registro);
}

export async function pesquisarPorId(id: number | string): Promise<Pessoa | null> {
  return await Pessoa.findByPk(id);
}

export async function deletar(pessoa: Pessoa | null): Promise<void> {
  return await pessoa?.destroy();
}
