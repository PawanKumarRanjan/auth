const ensureAuthenticated = require('../Middlewares/auth');

const router = require('express').Router();

router.get('/' ,ensureAuthenticated, (req, res) => {
    console.log('--- logged in user detail ---');
    res.status(200).json({
        message: "hello user"
    });
});

module.exports = router;