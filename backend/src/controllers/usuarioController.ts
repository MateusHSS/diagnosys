import {Router} from "express";
import {criaUsuario, buscaUsuario, deletaUsuario, listaUsuarios, listaRegistros} from "@services/usuarioService";

const router = Router();

router.post("/usuario", criaUsuario);
router.get("/usuario", listaUsuarios);
router.get("/usuario/:id", buscaUsuario);
router.delete("/usuario/:id", deletaUsuario);
router.get("/usuario/:id/registro", listaRegistros);

export default router;