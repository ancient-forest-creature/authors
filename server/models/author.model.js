const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You must submit an Author Name"],
        minLength: [3, "Name must be at least 3 characters long"]
    },
    books: { 
        type: [String],
        validate: [bookLimit, "Authors may have no more than 3 books"]
    }
}, { timestamps: true });

function bookLimit(val) {
    return val.length <= 3;
};

module.exports = mongoose.model("Author", AuthorSchema);