const { Sequelize } = require('sequelize')
console.log(process.env)


module.exports = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	host: 'localhost',
	port: 5432,
	dialectOptions: {
		ssl: {
			require: true, // This will help you. But you will see nwe error
			rejectUnauthorized: false // This line will fix new error
		}
	}
})



