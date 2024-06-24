import Registro, {RegistroAtributos} from "models/registro";

export async function criarRegistro(registro: RegistroAtributos): Promise<Registro> {
  return await Registro.create(registro);
}

export async function listarRegistros(id: number | string): Promise<Registro[]> {
  return await Registro.findAll({where: {idPessoa: id} });
}