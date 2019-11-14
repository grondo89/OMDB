const Sequelize = require ('sequelize');

const db = new Sequelize("postgres://postgres@localhost:5432/OMDB", {logging: false,});

module.exports = db