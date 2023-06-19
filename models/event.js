import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema({
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {
        type: String,
    },
    website: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    youtube: {
        type: String,
    },
    github: {
        type: String,
    },
    discord: {
        type: String,
    },
});

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
    social_links: [
        socialSchema
    ],
    location: {
        type: String,
    },
    banner: {
        type: String,
    },
    price: {
        type: Number,
        default: 1
    },
    category: {
        type: String,
    },
    tags: {
        type: [String],
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
