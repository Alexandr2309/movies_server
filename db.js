const { Sequelize } = require('sequelize')
console.log(process.env)
module.exports = new Sequelize(process.env.DATBASE_URL, {
	dialect: 'postgres',
	port: 5432,
	host: 'localhost'
})



