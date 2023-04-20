import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
    name: String,
    location: String,
    link: String,
    description: String,
    logoUrl: String,
    imgUrl: String,
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const College = mongoose.model('College', collegeSchema);

export default College;

