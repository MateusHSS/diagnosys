import Medico, {MedicoAtributos} from "models/medico";
import Pessoa from "models/pessoa";

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

export async function buscarMedicoPorNome(nome: string): Promise<Pessoa[] | null> {
  return await Pessoa.findAll({
    where: { nome },
    include: [{ model: Medico }]
  });
}