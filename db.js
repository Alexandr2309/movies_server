const { Sequelize } = require('sequelize')
console.log(process.env.DATABASE_URL, process.env)
module.exports = new Sequelize('dd3snj86qjndrr', 'vcpnllqwfkhjey', 'b7e06606ed2c58a5c7803ba2da84548ef829e3c1484be17e0ced1e83b7c047e7', {
	host: 'b7e06606ed2c58a5c7803ba2da84548ef829e3c1484be17e0ced1e83b7c047e7',
	dialect: 'postgres',
	port: 5432
})



