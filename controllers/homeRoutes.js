const router = require('express').Router();
const { User, Blog } = require('../models');
const isAuthorized = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render("index", {
        logged_in: req.session.logged_in,
        title: "Home",
    });

})

router.get('/signup', async (req, res) => {
    res.render("signup");
})

router.get('/blog', async (req, res) => {
    //route to get all blogs
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User, attributes: ['name'] }],
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('blogFeed', {
            blogs,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', async (req, res) => {
    //route to get single blog
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['name'] }],
        })
        const blog = blogData.get({ plain: true })
        res.render('singleBlog', {
            ...blog,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/profile', isAuthorized, async (req, res) => {
    //route to get YOUR profile page
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }]
        })
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    //route for login, if already logged in redirects to profile
    if (req.session.logged_in) {
        res.redirect('/profile')
        return
    }
    res.render('login')
})
//

router.get('/like:blog_id', async (req, res) => {
    //route for liking post, increases integer of likes by 1
    await Blog.increment({ likes: 1 }, { where: { id: req.params.blog_id } }).then((data) => {
        res.json(data);
    });
})
module.exports = router;