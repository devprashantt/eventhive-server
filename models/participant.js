import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
    name: String,
    email: String,
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;