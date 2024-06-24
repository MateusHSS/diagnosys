import {Router} from "express";
import {criaMedico, buscaMedico, deletaMedico, listaMedicos, 
        listaReceitas, criaReceita, listaConsultas,
        criaConsulta, buscaUsuario} from "@services/medicoService";

const router = Router();

router.post("/medico", criaMedico);
router.get("/medico", listaMedicos);
router.get("/medico/:id", buscaMedico);
router.delete("/medico/:id", deletaMedico);
router.get("/medico/:id/receita", listaReceitas);
router.post("/medico/receita", criaReceita);
router.get("/medico/:id/consulta", listaConsultas);
router.post("/medico/consulta", criaConsulta);
router.get("/medico/:id/usuario", buscaUsuario);

export default router;
