const { Sequelize } = require('sequelize')
console.log(process.env)
module.exports = new Sequelize(process.env.DATBASE_URL, {
	dialect: 'postgres',
	port: process.env.DB_PORT,
	host: process.env.DB_HOST
})



