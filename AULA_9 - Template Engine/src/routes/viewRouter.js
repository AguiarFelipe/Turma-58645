const express = require('express');
const router = express.Router();

let food = [
    {name: "Hamburguer", price: 200},
    {name: "Banana", price: 300},
    {name: "Refrigerante", price: 400},
    {name: "Salada", price: 500}
];

router.get('/', (req, res)=>{
    let user = {
        name: "Maria",
        last_name: "Silva",
        role: "admin"
    };

    res.render('index', {
        user:user,
        style:"index.css",
        isAdmin: user.role === "admin",
        food
    });
});

module.exports = router;
