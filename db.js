const { Sequelize } = require('sequelize')
console.log(process.env.DATABASE_URI)

const connectString = process.env.DATBASE_URI
console.log('Connection String = ', connectString)
console.log('Connection KEY = ', process.env.SECRET_KEY)

module.exports = new Sequelize(connectString, {
	dialect: 'postgres'
})



