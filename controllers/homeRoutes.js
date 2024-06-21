const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
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
            include: [{ model: User, attributes: ['name'] }, 
            { model: Comment, include: [{ model: User, attributes: ['name'] }] }],
        })
        const blog = blogData.get({ plain: true })
        console.log(blog)
        res.render('singleBlog', {
            ...blog,
            logged_in: req.session.logged_in,

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
            logged_in: req.session.logged_in,
            title: "Profile",
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
    res.render("login", {
        title: "Login",
    })
})

//route to like a blog
router.put('/like/:id', async (req, res) => {
    try {
        //find the blog
        const blog = await Blog.findByPk(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'blog not found' });
        }

        //update the likes
        blog.likes += 1;
        //save the changes
        await blog.save();
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;