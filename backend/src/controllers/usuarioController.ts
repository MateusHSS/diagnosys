import {Router} from "express";
import {create, buscarPorId, excluir, get} from "@services/usuarioService";

const router = Router();

router.get("/usuario", get);
router.get("/usuario/:id", buscarPorId);
router.post("/usuario", create);
router.delete("/usuario/:id", excluir);

export default router;