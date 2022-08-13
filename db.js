// const { Sequelize } = require('sequelize')
//
// module.exports = new Sequelize(
// 	process.env.DB_NAME,
// 	process.env.DB_USER,
// 	process.env.DB_PASSWORD,
// 	{
// 		dialect: 'postgres',
// 		host: process.env.DB_HOST,
// 		port: process.env.DB_PORT
// 	}
// )
const { Client } = require('pg')

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
})

client.connect()
