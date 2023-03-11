import { Router } from 'express';
import passport from 'passport';
import { signUp, signIn, googleSignIn, googleCallback } from '../controllers/authController.js';

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.get('/google', googleSignIn);
router.get('/google/callback', googleCallback);

router.get('/login/failed', (req, res) => {
    res.status(401).json({ message: 'Google login failed' });
});
router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({ user: req.user });
    }
    else {
        res.status(401).json({ message: 'Google login failed' });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logged out successfully' });
});

export default router;

