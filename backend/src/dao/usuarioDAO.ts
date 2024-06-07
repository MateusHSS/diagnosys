import Usuario, {UsuarioAtributos} from "models/usuario";

export async function listar(): Promise<Usuario[]> {
  return await Usuario.findAll();
}

export async function inserir(registro: UsuarioAtributos): Promise<Usuario> {
  return await Usuario.create(registro);
}

export async function pesquisarPorId(id: number | string): Promise<Usuario | null> {
  return await Usuario.findByPk(id);
}

export async function deletar(usuario: Usuario | null): Promise<void> {
  return await usuario?.destroy();
}
