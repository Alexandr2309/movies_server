const { Sequelize } = require('sequelize')
console.log(process.env)

module.exports = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	host: 'localhost',
	port: 5432
})



