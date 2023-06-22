import { Router } from 'express';
import { getDescription, obtenerUsuarios } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', getDescription);
router.get('/users', obtenerUsuarios);

export default router;