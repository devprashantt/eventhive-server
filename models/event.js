import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    facebook_link: {
        type: String,
    },
    instagram_link: {
        type: String,
    },
    twitter_link: {
        type: String,
    },
    website_link: {
        type: String,
    },
    linkedin_link: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Ongoing', 'Finished'],
        default: 'Upcoming'
    },
    colleges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
    }],
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participant'
    }],
    organizers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer'
    }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
