const sequelize = require('../db')
const { DataTypes } = require('sequelize')


const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING }
})

const Favorite = sequelize.define('favorite', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})


const FavoriteFilm = sequelize.define('favorite_film', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	favouriteFilms: { type: DataTypes.ARRAY({ type: DataTypes.INTEGER }) }
})

User.hasOne(Favorite)
Favorite.belongsTo(User)

Favorite.hasMany(FavoriteFilm)
FavoriteFilm.belongsTo(Favorite)

module.exports = {
	User,
	Favorite,
	FavoriteFilm
}
