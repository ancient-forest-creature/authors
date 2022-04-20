const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You must submit an Author Name"],
        minLength: [3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Author", AuthorSchema);