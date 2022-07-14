const {Learning} = require("../models/models");


class LearningController {
    async create(req, res) {
        const {number, text} = req.body;
        const learning = await Learning.create({number, text});
        return res.send(learning);
    }
    async getAll(req, res) {
        const learnings = await Learning.findAll();
        return res.send(learnings);
    }

}

module.exports = new LearningController();