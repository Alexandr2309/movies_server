const { Sequelize } = require('sequelize')
console.log(process.env)

const connectString = process.env.DATABASE_URL
const connectionSTr = process.env.DATABASE_URI

const key = process.env.SECRET_KEY
console.log('Connection String = ', connectString)
console.log('Connection Str = ', connectionSTr)
console.log('Connection KEY = ', process.env.SECRET_KEY, key)

module.exports = new Sequelize(connectionSTr, {
	dialect: 'postgres'
})



