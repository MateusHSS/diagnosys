import Usuario, {UsuarioAtributos} from "models/usuario";

export async function listarUsuarios(): Promise<Usuario[]> {
  return await Usuario.findAll();
}

export async function criarUsuario(dados: UsuarioAtributos): Promise<Usuario> {
  return await Usuario.create(dados);
}

export async function buscarUsuario(id: number | string): Promise<Usuario | null> {
  return await Usuario.findByPk(id);
}

export async function deletarUsuario(usuario: Usuario | null): Promise<void> {
  return await usuario?.destroy();
}

export async function atualizarUsuario(usuario: Usuario, dados: Partial<UsuarioAtributos>): Promise<Usuario> {
  return await usuario.update(dados);
}