const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    actor: {
        type: String,
        default: "Not specified"
    },
    rating: {
        type: Number,
        default: "rating not specified"
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;

