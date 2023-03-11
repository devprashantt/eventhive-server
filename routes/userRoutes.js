import express from 'express';
import { createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import passport from 'passport';

const router = express.Router();

router.post('/', createUser);
router.get('/:userId', getUserById);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Logout successful' });
});

export default router;
