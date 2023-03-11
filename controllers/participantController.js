import Participant from '../models/participant.js';

// Get all participants
export async function getParticipants(req, res) {
    try {
        const participants = await Participant.find();
        res.status(200).json(participants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single participant by ID
export async function getParticipantById(req, res) {
    try {
        const participant = await findById(req.params.participantId);
        if (!participant) {
            return res.status(404).json({ error: 'Participant not found' });
        }
        res.status(200).json(participant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new participant
export async function createParticipant(req, res) {
    try {
        const participant = new Participant({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            college: req.body.college,
        });
        await participant.save();
        res.status(201).json(participant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update an existing participant
export async function updateParticipant(req, res) {
    try {
        const participant = await findByIdAndUpdate(
            req.params.participantId,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                college: req.body.college,
            },
            { new: true }
        );
        if (!participant) {
            return res.status(404).json({ error: 'Participant not found' });
        }
        res.status(200).json(participant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing participant
export async function deleteParticipant(req, res) {
    try {
        const participant = await findByIdAndDelete(req.params.participantId);
        if (!participant) {
            return res.status(404).json({ error: 'Participant not found' });
        }
        res.status(200).json({ message: 'Participant deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
