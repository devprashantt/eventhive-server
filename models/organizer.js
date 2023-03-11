import mongoose from 'mongoose';

const organizerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const Organizer = mongoose.model('Organizer', organizerSchema);

export default Organizer;