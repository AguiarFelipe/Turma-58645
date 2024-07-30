const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home');
});

router.get('/login', (res, req)=>{
    res.render('login');
})

module.exports = router;