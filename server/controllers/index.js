const router = require('express').Router();

//defining routes
const api = require('./api')
const homeRoutes = require('./homeRoutes')

router.use('/api', api)
router.use('/', homeRoutes)

module.exports = router
