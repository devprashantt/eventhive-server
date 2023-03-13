import { Router } from 'express';
import * as auth from '../controllers/auth.js';

import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

router.post('/logout', auth.logout);

export default router;
