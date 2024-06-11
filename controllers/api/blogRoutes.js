const router = require('express').Router();
const { Blog } = require('../../models')

router.post('/', async (req,res) => {
    //route for posting blog
})

router.delete('/:id', async (req,res) => {
    //route for deleting blog
})

module.exports = router;