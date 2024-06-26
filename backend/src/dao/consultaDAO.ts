import Consulta, {ConsultaAtributos} from "models/consulta";
import Medico from "models/medico";
import Pessoa from "models/pessoa";

export async function criarConsulta(registro: ConsultaAtributos): Promise<Consulta> {
  return await Consulta.create(registro);
}

export async function listarConsultas(id: number | string): Promise<Consulta[]> {
  return await Consulta.findAll({where: {idPessoa: id}, include: { all: true, nested: true } });
}