import { Router } from 'express';
import { verifyToken } from '../middleware/tokens.js';

import * as auth from '../controllers/auth.js';

import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.post('/signup', auth.signup);
router.post('/signin', auth.signin);

router.post('/logout', verifyToken, auth.logout);

export default router;
