import { Router } from 'express';
import { getDescription, obtenerUsuarios, crearMensaje } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', getDescription);
router.get('/users', obtenerUsuarios);
router.post('/messages', crearMensaje);

export default router;