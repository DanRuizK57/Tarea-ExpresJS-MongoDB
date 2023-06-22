import { Router } from 'express';
import { registrarUsuario, login } from '../controllers/mensajeria.controller.js';

const router = Router();

router.post('/register', registrarUsuario);
router.post('/login', login);

export default router;