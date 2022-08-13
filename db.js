const { Sequelize } = require('sequelize')
console.log(process.env.DATABASE_URI)

const connectStr = process.env.DATBASE_URI
console.log('Connection String = ', connectStr)
console.log('Connection KEY = ', process.env.SECRET_KEY)

module.exports = new Sequelize(connectStr, {
	dialect: 'postgres'
})



