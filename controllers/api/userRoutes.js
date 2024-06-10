const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req,res) => {
    //route for creating user
})

router.post('/login', async (req, res)=> {
    //route for logging in
})

router.post('/logout', (req,res) => {
    //route for logging out
})

module.exports = router;