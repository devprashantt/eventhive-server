import express from 'express';
import * as eventControllers from '../controllers/eventController.js';

const router = express.Router();

// Routes for /events
router.get('/', eventControllers.getEvents);
router.post('/', eventControllers.createEvent);

// Routes for /events/:eventId
router.get('/:eventId', eventControllers.getEventById);
router.put('/:eventId', eventControllers.updateEvent);
router.delete('/:eventId', eventControllers.deleteEvent);

export default router;
