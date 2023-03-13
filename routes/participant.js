import express from 'express';
import * as participant from '../controllers/participant.js';

const router = express.Router();

// Routes for /participants
router.get('/', participant.getParticipants);
router.post('/', participant.createParticipant);

// Routes for /participants/:participantId
router.get('/:participantId', participant.getParticipantById);
router.put('/:participantId', participant.updateParticipant);
router.delete('/:participantId', participant.deleteParticipant);

export default router;