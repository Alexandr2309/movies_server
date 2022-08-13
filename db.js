const { Sequelize } = require('sequelize')
console.log(process.env.DATABASE_URI)
module.exports = new Sequelize(process.env.DATBASE_URI, {
	dialect: 'postgres',
	port: 5432,
	host: 'localhost'
})



