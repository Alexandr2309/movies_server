const { Sequelize } = require('sequelize')
console.log(process.env)

module.exports = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	ssl: true,
	host: 'localhost',
	port: 5432
})



