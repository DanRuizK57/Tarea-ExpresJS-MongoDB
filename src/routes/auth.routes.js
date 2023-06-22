import { Router } from 'express';
import { registrarUsuario } from '../controllers/mensajeria.controller.js';

const router = Router();

router.post('/register', registrarUsuario);

export default router;