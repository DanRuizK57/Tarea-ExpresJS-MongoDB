import { Router } from 'express';
import { getDescription } from '../controllers/mensajeria.controller.js';

const router = Router();

router.get('', getDescription);

export default router;