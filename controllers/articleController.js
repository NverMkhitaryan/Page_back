const {Article} = require("../models/models");


class ArticleController {
    async create(req, res) {
        const {image, title, abstract, date} = req.body;
        const article = await Article.create({image, title, abstract, date});
        return res.send(article);
    }
    async getAll(req, res) {
        const articles = await Article.findAll();
        return res.send(articles);
    }

}

module.exports = new ArticleController();