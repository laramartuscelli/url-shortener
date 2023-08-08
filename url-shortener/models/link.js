const Sequelize = require('sequelize');
const database = require('../db');

// Configurações da Tabela e suas Colunas
const Link = database.define('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0
    },
    hits: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
})

module.exports = Link;