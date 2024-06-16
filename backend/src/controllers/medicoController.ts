import {Router} from "express";
import {criaMedico, buscaMedico, deletaMedico, listaMedicos, listaRegistros, criaRegistro} from "@services/medicoService";

const router = Router();

router.post("/medico", criaMedico);
router.get("/medico", listaMedicos);
router.get("/medico/:id", buscaMedico);
router.delete("/medico/:id", deletaMedico);
router.get("/medico/:id/registro", listaRegistros);
router.post("/medico/registro", criaRegistro);

export default router;
