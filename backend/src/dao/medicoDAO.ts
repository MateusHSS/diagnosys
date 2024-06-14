import Registro, {RegistroAtributos} from "models/registro";
import Medico, {MedicoAtributos} from "models/medico";

export async function listarMedicos(): Promise<Medico[]> {
  return await Medico.findAll();
}

export async function criarMedico(dados: MedicoAtributos): Promise<Medico> {
  return await Medico.create(dados);
}

export async function buscarMedico(id: number | string): Promise<Medico | null> {
  return await Medico.findByPk(id);
}

export async function deletarMedico(medico: Medico): Promise<void> {
  return await medico.destroy();
}

export async function listarRegistros(id: number | string): Promise<Registro[]> {
  return await Registro.findAll({where: {idPessoa: id} });
}

export async function criarRegistro(registro: RegistroAtributos): Promise<Registro> {
  return await Registro.create(registro);
}