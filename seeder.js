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

    const colleges = await College.insertMany(colleges_data);

    console.log("Data seeded");
    mongoose.connection.close();
});
