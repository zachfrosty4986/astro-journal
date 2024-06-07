const router = require('express').Router();
const { User, Blog } = require('../../models');

router.get('/', async (req, res) => {
    //homepage feed route
})

router.get('/blog/', async (req, res) => {
    //route to get all blogs
})

router.get('/blog/:id', async (req, res) => {
    //route to get single blog
})

router.get('/profile', async (req, res) => {
    //route to get YOUR profile page
})

router.get('/login', async (req, res) => {
    //route to redirect login to profile
})

module.exports = router;