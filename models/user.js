import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: function () {
                return !this.isGoogleUser;
            }
        },
        name: {
            type: String,
            required: true,
        },
        isOrganizer: {
            type: Boolean
        },
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task',
            },
        ],
        college: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'College',
        },
        eventsOrganized: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
        ],
        eventsRegistered: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
        ],
        resourcesUploaded: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Resource',
            }
        ],
        provider: {
            type: String,
        },
        googleId: {
            type: String,
        },
        isGoogleUser: {
            type: Boolean,
            default: function () {
                return !!this.googleId;
            }
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
