import mongoose from "mongoose";
import colleges_data from "./colleges.js";

import College from "./models/college.js";
import Event from "./models/event.js";
import Organizer from "./models/organizer.js";
import Participant from "./models/participant.js";
import Resource from "./models/resource.js";
import Category from "./models/category.js";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
    console.log("Database connected");

    // Create colleges
    const colleges = await College.insertMany(colleges_data);

    // Create categories
    const categories = await Category.insertMany([
        {
            name: "Technical",
        },
        {
            name: "Non-Technical",
        },
    ]);

    // Create resources
    const resources = await Resource.insertMany([
        {
            name: "Projector",
            description: "A device that projects an image onto a surface",
            quantity: 5,
        },
        {
            name: "Microphone",
            description: "A device used to amplify sound",
            quantity: 10,
        },
    ]);

    // Create organizers
    const organizers = await Organizer.insertMany([
        {
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "1234567890",
            college: colleges[0]._id,
        },
        {
            name: "Jane Smith",
            email: "janesmith@example.com",
            phone: "9876543210",
            college: colleges[1]._id,
        },
    ]);

    // Create participants
    const participants = await Participant.insertMany([
        {
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            college: colleges[0]._id,
        },
        {
            name: "Bob Anderson",
            email: "bobanderson@example.com",
            college: colleges[1]._id,
        },
    ]);

    // Create events
    const events = await Event.insertMany([
        {
            name: "TechFest 2023",
            description: "A festival of technology",
            date: "2023-10-15T18:00:00.000Z",
            location: "IIIT Hyderabad",
            status: "Upcoming",
            img: "https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074958/eventhive/iit/Varanasi_ifc13y.png",
            colleges: [colleges[0]._id],
            category: [categories[0]._id],
            resources: [resources[0]._id],
            participants: [participants[0]._id],
            organizers: [organizers[0]._id],
        },
        {
            name: "HackMIT 2022",
            description: "A hackathon organized by MIT",
            date: "2022-09-10T12:00:00.000Z",
            location: "MIT",
            status: "Finished",
            img: "https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Madras_agy2ys.png",
            colleges: [colleges[1]._id],
            category: [categories[0]._id],
            resources: [resources[1]._id],
            participants: [participants[1]._id],
            organizers: [organizers[1]._id],
        },
    ]);

    console.log("Data seeded");
    mongoose.connection.close();
});
