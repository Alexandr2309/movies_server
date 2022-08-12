const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, Favorite, FavoriteFilm } = require('../models/models')
const jwtToken = require('jsonwebtoken')

const generateJwt = (id, email) => {
	return jwtToken.sign({ id, email },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' }
	)
}

class UserController {
	async registration(req, res, next) {
		
		const { email, password } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Некорретные email или пароль'))
		}
		
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(ApiError.badRequest('Пользователь уже существует!'))
		}
		
		const hashPass = await bcrypt.hash(password, 5)
		const user = await User.create({ email, password: hashPass })
		const favourite = await Favorite.create({ userId: user.id })
		const favFilms = await FavoriteFilm.create({ favoriteId: favourite.dataValues.id })
		
		const token = generateJwt(user.id, user.email)
		
		return res.json({ token })
	}
	
	async login(req, res, next) {
		const { email, password } = req.body
		
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(ApiError.internal('Пользователь не найден!'))
		}
		
		let comparePass = bcrypt.compareSync(password, user.password)
		if (!comparePass) {
			return next(ApiError.internal('Уканазн неверный пароль!'))
		}
		
		const token = generateJwt(user.id, user.email)
		return res.json({ token })
	}
	
	async checkUser(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email)
		
		return res.json({ token })
	}
	
	async toggleFavourite(req, res, next) {
		const { userId, films } = req.body
		
		try {
			const favourite = await Favorite.findOne({ where: { userId } })
			const favFilms = await FavoriteFilm.update({ favouriteFilms: films }, { where: { favoriteId: favourite.id } })
			return res.status(200).json({ message: 'Информация о избранном успешно обновлена', favourite: favFilms })
			
		} catch (e) {
			return next(ApiError.badRequest(e.message))
		}
	}
	
	async getFavourite(req, res, next) {
		const { userId } = req.body
		
		const favourite = await Favorite.findOne({ where: { userId } })
		const favFilms = await FavoriteFilm.findOne({ where: { favoriteId: favourite.id } })
		
		return res.json({ favourite: favFilms?.favouriteFilms || [] })
	}
}

module.exports = new UserController()
