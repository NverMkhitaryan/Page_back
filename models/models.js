const sequelize = require("../db");

const {DataTypes} = require("sequelize");
const {INTEGER, STRING} = DataTypes;

const Book = sequelize.define("Book", {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    cover: {type: STRING, allowNull: false},
    title: {type: STRING, allowNull: false},
    price: {type: STRING, allowNull: false},
    abstract: {type: STRING, allowNull: false},
    type: {type: STRING, allowNull: false},
})

const Partner = sequelize.define("Partner", {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    logo: {type: STRING, allowNull: false},
    title: {type: STRING, allowNull: false},
    abstract: {type: STRING, allowNull: false},
})

const Learning = sequelize.define("Learning", {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: STRING, allowNull: false},
    text: {type: STRING, allowNull: false},
})

const Article = sequelize.define("Article", {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    image: {type: STRING, allowNull: false},
    title: {type: STRING, allowNull: false},
    abstract: {type: STRING, allowNull: false},
    date: {type: STRING, allowNull: false},
})

module.exports = {
    Book, Partner, Learning, Article
}