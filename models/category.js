import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }]
});

const Category = mongoose.model("Category", categorySchema);

export default Category;