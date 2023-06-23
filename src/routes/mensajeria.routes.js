import { Router } from 'express';
import { getDescription, 
    obtenerUsuarios, 
    crearMensaje, 
    obtenerMensajesPorUsuario,
    eliminarMensajePorID
 } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', getDescription);
router.get('/users', obtenerUsuarios);
router.post('/messages', crearMensaje);
router.get('/users/:userId/messages', obtenerMensajesPorUsuario);
router.delete('/messages/:messageId/', eliminarMensajePorID);

export default router;