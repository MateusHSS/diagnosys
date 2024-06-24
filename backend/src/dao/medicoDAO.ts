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