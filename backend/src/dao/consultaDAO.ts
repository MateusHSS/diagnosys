import Consulta, {ConsultaAtributos} from "models/consulta";

export async function criarConsulta(registro: ConsultaAtributos): Promise<Consulta> {
  return await Consulta.create(registro);
}

export async function listarConsultas(id: number | string): Promise<Consulta[]> {
  return await Consulta.findAll({where: {idPessoa: id} });
}