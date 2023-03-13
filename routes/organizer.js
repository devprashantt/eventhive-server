import express from 'express';
import * as organizer from '../controllers/organizer.js';

const router = express.Router();

// Routes for /organizers
router.get('/', organizer.getorganizers);
router.post('/', organizer.createorganizer);

// Routes for /organizers/:organizerId
router.get('/:organizerId', organizer.getorganizerById);
router.put('/:organizerId', organizer.updateorganizer);
router.delete('/:organizerId', organizer.deleteorganizer);

export default router;
