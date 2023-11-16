import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
const AutoIncrement = AutoIncrementFactory(mongoose);
const Event = new mongoose.Schema({
    eventID: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    organiser: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    volunteers: [{
        type: String, // Assuming Auth0 user IDs are strings
    }],
    picture: {
        type: String,
    },
    organiserLogo: {
        type: String,
    },
    description: {
        type: String,
    },
    title: {
        type: String,
    },
    
});

// Event.plugin(AutoIncrement, { inc_field: 'eventID' });

const EventSchema = mongoose.model('Event',Event);

export default EventSchema;