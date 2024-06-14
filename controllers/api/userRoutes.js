const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req, res) => {
    //route for creating user
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true;

            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/login', async (req, res) => {
    //route for logging in
    try {
        const userData = await User.findOne({ where: { email: req.body.email } })

        if (!userData) {
            res.status(400).json({ message: 'Invalid email or password, try again' })
            return
        }

        const validatePass = userData.checkPassword(req.body.password);

        if (!validatePass) {
            res.status(400).json({ message: 'Invalid email or password, try again' })
            return
        }
        //if email isnt found or password is incorrect, returns the same error message 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Successfully logged in' });
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/logout', (req, res) => {
    //route for logging out
    if (req.session.logged_in) {
        req.session.destroy(() => { res.status(204).end(); });
    } else {
        res.status(404).end();
    }
})

module.exports = router;