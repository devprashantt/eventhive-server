import Organizer from '../models/organizer.js';

// Get all organizers
export async function getorganizers(req, res) {
    try {
        const organizers = await Organizer.find();
        res.status(200).json(organizers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single organizer by ID
export async function getorganizerById(req, res) {
    try {
        const organizer = await organizer.findById(req.params.organizerId);
        if (!organizer) {
            return res.status(404).json({ error: 'organizer not found' });
        }
        res.status(200).json(organizer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new organizer
export async function createorganizer(req, res) {
    try {
        const organizer = new Organizer({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            college: req.body.college,
        });
        await organizer.save();
        res.status(201).json(organizer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update an existing organizer
export async function updateorganizer(req, res) {
    try {
        const organizer = await organizer.findByIdAndUpdate(
            req.params.organizerId,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                college: req.body.college,
            },
            { new: true }
        );
        if (!organizer) {
            return res.status(404).json({ error: 'organizer not found' });
        }
        res.status(200).json(organizer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing organizer
export async function deleteorganizer(req, res) {
    try {
        const organizer = await organizer.findByIdAndDelete(req.params.organizerId);
        if (!organizer) {
            return res.status(404).json({ error: 'organizer not found' });
        }
        res.status(200).json({ message: 'organizer deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
