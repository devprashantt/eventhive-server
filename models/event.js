import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    start_date: {
        type: Date,
    },
    start_time: {
        type: String,
    },
    end_time: {
        type: String,
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
    },
    banner: {
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
