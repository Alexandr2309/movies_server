const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/favourites', userController.toggleFavourite)
router.post('/get_favourite', userController.getFavourite)
router.get('/auth', authMiddleware, userController.checkUser)


module.exports = router
