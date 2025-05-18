import { Router } from 'express';

import { getRegisterController } from '../controllers/controllers.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/register', ctrlWrapper(getRegisterController));

export default router;
