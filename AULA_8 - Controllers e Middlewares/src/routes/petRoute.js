const express = require('express');
const router = express.Router();

const pets = [];

router.use(function (req, res, next) {
    console.log('Execução em: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.json(pets);
});

router.post('/', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).json(pet);
});

module.exports = router;
