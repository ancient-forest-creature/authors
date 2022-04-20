const AuthorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get("/api/author", AuthorController.findAllAuthors)
    app.post("/api/author", AuthorController.createNewAuthor)
    app.get("/api/author/:id", AuthorController.findOneAuthor)
    app.put("/api/author/:id", AuthorController.updateAuthor)
    app.delete("/api/author/:id", AuthorController.deleteOneAuthor)
}
