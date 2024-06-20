const router = require('express').Router();
const { Blog } = require('../../models')
const isAuthorized = require('../../utils/auth');
const moment = require('moment')

router.post('/', async (req, res) => {
    //route for posting blog
    try {
        const newBlog = await Blog.create({
            user_id: req.session.user_id,
            title: req.body.title,
            content: req.body.content,
            date_created: moment().format("L"), //example of appearance "6/19/2024"
            likes: 0,
        })
        res.status(200).json(newBlog)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.delete('/:id', isAuthorized, async (req, res) => {
    //route for deleting blog
    try {
        const BlogData = await Blog.destroy({
            //checks for user_id and the blog id to match, prevents deleting other peoples blog
            where: { id: req.params.id, user_id: req.session.user_id, }
        })
        if (!BlogData) {
            //if blog isnt found posts a not found message
            res.status(404).json({ message: 'Blog not found, check id' })
            return
        }
        res.status(200).json(BlogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;