const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            content: req.body.content,
            date_posted: req.body.date_posted,
            likes: 0,
        })
        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router