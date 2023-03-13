import express from 'express';
import * as event from '../controllers/event.js';

const router = express.Router();

// Routes for /events
router.get('/', event.getEvents);
router.post('/', event.createEvent);

// Routes for /events/:eventId
router.get('/:eventId', event.getEventById);
router.put('/:eventId', event.updateEvent);
router.delete('/:eventId', event.deleteEvent);

export default router;
