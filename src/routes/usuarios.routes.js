import { Router } from 'express';
import { obtenerUsuarios, obtenerMensajesPorUsuario } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', obtenerUsuarios);
router.get('/:userId/messages', obtenerMensajesPorUsuario);

export default router;