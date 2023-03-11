import express from 'express';
import * as participantControllers from '../controllers/participantController.js';

const router = express.Router();

// Routes for /participants
router.get('/', participantControllers.getParticipants);
router.post('/', participantControllers.createParticipant);

// Routes for /participants/:participantId
router.get('/:participantId', participantControllers.getParticipantById);
router.put('/:participantId', participantControllers.updateParticipant);
router.delete('/:participantId', participantControllers.deleteParticipant);

export default router;