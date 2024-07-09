const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const pessoasController = require('../controllers/pessoasController.js');

router.get('/cadastro', (req, res) => {
    res.render('cadastroPessoas');
});

router.post('/cadastro', upload.single('imagem'), pessoasController.createPessoa);

router.delete('/:uid', pessoasController.excluirPessoa);

router.get('/', pessoasController.getPessoas);

module.exports = router;
