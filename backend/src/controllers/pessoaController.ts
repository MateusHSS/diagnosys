import {Router} from "express";
import {get} from "@services/pessoaService";
import {create} from "@services/pessoaService";

const router = Router();

router.get("/pessoa", get);
router.post("/pessoa", create);

export default router;
