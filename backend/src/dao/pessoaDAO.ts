import Pessoa, {PessoaAtributos} from "models/pessoa";

export async function listar(): Promise<Pessoa[]> {
  return await Pessoa.findAll();
}

export async function inserir(registro: PessoaAtributos): Promise<Pessoa> {
  return await Pessoa.create(registro);
}
