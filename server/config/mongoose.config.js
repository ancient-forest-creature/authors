const mongoose = require("mongoose");

const tempDb = "authorsDb"

mongoose.connect(`mongodb://localhost/${tempDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${tempDb}`))
    .catch(err => console.log(`Something went wrong when connecting to ${tempDb} `, err));