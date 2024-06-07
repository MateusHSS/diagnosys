import {Router} from "express";
import {create, buscarPorId, excluir, get} from "@services/pessoaService";

const router = Router();

router.get("/pessoa", get);
router.get("/pessoa/:id", buscarPorId);
router.post("/pessoa", create);
router.delete("/pessoa/:id", excluir);

export default router;
