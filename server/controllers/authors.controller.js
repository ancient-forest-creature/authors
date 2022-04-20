const Author = require('../models/author.model');

module.exports = {

    findAllAuthors: (req, res) => {
        Author.find({}) //Find all
            .then((allAuthors) => {
                console.log(allAuthors)
                res.json(allAuthors)
            })
            .catch((err) => {
                console.log("findAllAuthors has failed!")
                console.log(err)
                res.json(err)
            })
    },

    createNewAuthor: (req, res) => {
        Author.create(req.body) //creates new based on info passed through the client request's body (likely a form)
            .then((newAuthor) => {
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log(err)
                console.log("createNewAuthor has failed!")
                res.status(400).json(err)
            })
    },


    findOneAuthor: (req, res) => {
        //Use a variable pulled from params to get the specifed item. So far, the specifier has always been id
        Author.findOne({ _id: req.params.id }) //the params variable, here being id, must match the variable in our routes
            .then((oneAuthor) => {
                console.log(oneAuthor)
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log(err)
                console.log("findOneAuthor has failed!")
                res.json(err)
            })
    },


    deleteOneAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((deletedAuthor) => {
                console.log(deletedAuthor)
                res.json(deletedAuthor)
            })
            .catch((err) => {
                console.log(err)
                console.log("deleteOneAuthor has failed!")
                res.json(err)
            })
    },


    updateAuthor: (req, res) => {
        //This is the one query that requires two pieces of data. the param specifer, and the req body
        Author.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedAuthor) => {
                console.log(updatedAuthor)
                res.json(updatedAuthor)
            })
            .catch((err) => {
                console.log(err)
                console.log("updateAuthor has failed!")
                res.status(400).json(err) 
            })

    }
}