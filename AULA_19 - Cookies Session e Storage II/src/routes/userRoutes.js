const express = require('express');
const router = express.Router();

// Middleware de autenticação
function authMiddleware(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

router.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/profile');
    }
    res.render('login');
});

router.get('/register', (req, res) => {
    if (req.session.user) {
        return res.redirect('/profile');
    }
    res.render('register');
});

router.get('/profile', authMiddleware, (req, res) => {
    res.render('profile', { user: req.session.user });
});

module.exports = router;
