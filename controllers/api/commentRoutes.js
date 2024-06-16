const router = require('express').Router();
const { Comment, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            content: req.body.body,
            blog_id: req.body.blog_id,
            date_posted: req.body.date_posted,
            likes: 0,
        });

        const user = await User.findByPk(req.session.user_id)

        newComment.user = user;

        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router