const {Book} = require("../models/models");


class BookController {
    async create(req, res) {
        const {cover, title, price, abstract, type} = req.body;
        const book = await Book.create({cover, title, price, abstract, type});
        return res.send("book");
    }
    async getAll(req, res) {
        const books = await Book.findAll();
        return res.send(books);
    }

}

module.exports = new BookController();