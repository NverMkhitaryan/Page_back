const {Partner} = require("../models/models");


class PartnerController {
    async create(req, res) {
        const {logo, title, abstract} = req.body;
        const partner = await Partner.create({logo, title, abstract});
        return res.send(partner);
    }
    async getAll(req, res) {
        const partners = await Partner.findAll();
        return res.send(partners);
    }

}

module.exports = new PartnerController();