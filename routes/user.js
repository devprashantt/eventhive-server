import express from 'express';
import { verifyToken, refreshToken } from '../middleware/tokens.js';

import * as user from '../controllers/user.js';

const router = express.Router();

router.get('/', user.getUsers);
router.post('/', user.createUser);

router.get('/user', verifyToken, user.getUser);
router.get("/refresh", refreshToken, verifyToken, user.getUser);

router.put('/:userId', user.updateUser);
router.delete('/:userId', user.deleteUser);

export default router;
