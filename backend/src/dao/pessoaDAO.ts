import Pessoa, {PessoaInput} from "@models/pessoaModel";

export async function listar(): Promise<Pessoa[]> {
  return await Pessoa.findAll();
}

export async function inserir(registro: PessoaInput): Promise<Pessoa> {
  const pessoa: Pessoa = Pessoa.build(registro);

  console.log(pessoa);

  await pessoa.save().catch((error) => {
    console.log("Erro", error);
  });

  return pessoa;
}
