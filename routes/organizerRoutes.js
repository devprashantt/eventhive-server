import express from 'express';
import * as organizerControllers from '../controllers/organizerController.js';

const router = express.Router();

// Routes for /organizers
router.get('/', organizerControllers.getorganizers);
router.post('/', organizerControllers.createorganizer);

// Routes for /organizers/:organizerId
router.get('/:organizerId', organizerControllers.getorganizerById);
router.put('/:organizerId', organizerControllers.updateorganizer);
router.delete('/:organizerId', organizerControllers.deleteorganizer);

export default router;
