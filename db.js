const { Sequelize } = require('sequelize')
console.log(process.env.DATABASE_URL)
module.exports = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres', port: 5432 })



