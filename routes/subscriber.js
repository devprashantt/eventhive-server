import express from 'express';
import * as subscriber from '../controllers/subscriber.js';

const router = express.Router();

// Routes for /subscribe
router.get('/', subscriber.getSubscribers);
router.post('/', subscriber.createSubscriber);

export default router;