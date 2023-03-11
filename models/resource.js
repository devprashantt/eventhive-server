import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;