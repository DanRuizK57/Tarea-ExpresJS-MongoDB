import { Router } from 'express';
import { getDescription, obtenerUsuarios, crearMensaje, obtenerMensajeoPorUsuario } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', getDescription);
router.get('/users', obtenerUsuarios);
router.post('/messages', crearMensaje);
router.get('/users/:userId/messages', obtenerMensajeoPorUsuario);

export default router;