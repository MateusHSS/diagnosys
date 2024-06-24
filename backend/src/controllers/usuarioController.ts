import {Router} from "express";
import {criaUsuario, buscaUsuario, deletaUsuario, listaUsuarios,
        listaReceitas, listaConsultas} from "@services/usuarioService";

const router = Router();

router.post("/usuario", criaUsuario);
router.get("/usuario", listaUsuarios);
router.get("/usuario/:id", buscaUsuario);
// router.patch("/usuario")
router.delete("/usuario/:id", deletaUsuario);
router.get("/usuario/:id/receita", listaReceitas);
router.get("/usuario/:id/consulta", listaConsultas);

export default router;