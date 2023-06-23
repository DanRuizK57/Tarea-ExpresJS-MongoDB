import { Router } from 'express';
import { crearMensaje, eliminarMensajePorID } from '../controllers/mensajeria.controller.js';

const router = Router();

router.post('', crearMensaje);
router.delete('/:messageId/', eliminarMensajePorID);

export default router;