import Event from '../models/event.js';
import College from '../models/college.js';
import { uploadImage } from '../config/cloudinary.js';

// Get all events
export async function getEvents(req, res) {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single event by ID
export async function getEventById(req, res) {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new event
export async function createEvent(req, res) {

    try {
        // Upload the banner image to cloudinary and get the URL
        const banner_link = await uploadImage(req.body.banner);

        const event = new Event({
            name: req.body.name,
            start_date: req.body.date,
            description: req.body.description,
            start_time: req.body.startTime,
            end_time: req.body.endTime,
            location: req.body.location,
            banner: banner_link,
            colleges: req.body.college,
        });
        await event.save();

        // Update the college's events array
        await College.findByIdAndUpdate(req.body.college, {
            $push: { events: event._id }
        });

        res.status(201).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}


// Update an existing event
export async function updateEvent(req, res) {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.eventId,
            {
                name: req.body.name,
                date: req.body.date,
                description: req.body.description,
                resources: req.body.resources,
                college: req.body.college,
            },
            { new: true }
        );
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing event
export async function deleteEvent(req, res) {
    try {
        const event = await findByIdAndDelete(req.params.eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new payment
export async function createPayment(req, res) {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const payment = {
            amount: req.body.amount,
            date: req.body.date,
            description: req.body.description,
        };
        event.payments.push(payment);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}