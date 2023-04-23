import mongoose from "mongoose";

const festSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imgUrl: { type: String },
    website: { type: String },
    type: { type: [String] },
});

const collegeSchema = new mongoose.Schema({
    name: String,
    location: String,
    link: String,
    description: String,
    logoUrl: String,
    imgUrl: String,
    fests: [festSchema],
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
        },
    ],
});

const College = mongoose.model("College", collegeSchema);

export default College;
