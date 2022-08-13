const { Sequelize } = require('sequelize')
console.log(process.env)

const connectString = process.env.DATBASE_URL
const connectionSTr = process.env.DATBASE_URI
const key = process.env.SECRET_KEY
console.log('Connection String = ', connectString)
console.log('Connection Str = ', connectionSTr)
console.log('Connection KEY = ', process.env.SECRET_KEY, key)

module.exports = new Sequelize(connectString, {
	dialect: 'postgres'
})



