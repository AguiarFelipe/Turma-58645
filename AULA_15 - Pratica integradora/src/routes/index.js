const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Rota para a página inicial (home)
router.get('/', (req, res) => {
    res.render('home'); // Renderiza o arquivo home.handlebars
});

// Rota para a página de login (GET)
router.get('/login', (req, res) => {
    const { login, senha } = req.query;
    if (login === 'admin' && senha === '123') {
        res.redirect('/');
    } else {
        res.render('login', { error: 'Usuário ou senha incorretos' });
    }   
});

// Rota para o cadastro público de imagens
router.get('/cadastro-imagens', (req, res) => {
    res.render('cadastroImagens');
});

// Rota para a página de cadastro de pessoas
router.get('/cadastro-pessoas', (req, res) => {
    res.render('cadastroPessoas');
});

// Rota para a listagem de pessoas cadastradas
router.get('/listagem-pessoas', (req, res) => {
    res.render('listagemPessoas');
});

// Rota para o acervo de imagens
router.get('/listagem-imagens', (req, res) => {
    const imagesDir = path.join(__dirname, '../public/img');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            console.error('Erro ao ler diretório de imagens:', err);
            res.status(500).send('Erro ao ler diretório de imagens');
            return;
        }
        const imagens = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.render('listagemImagens', { imagens });
    });
});

// Rota para a listagem de JavaScript
router.get('/listagem-js', (req, res) => {
    const jsPath = path.join(__dirname, '../public/js');
    fs.readdir(jsPath, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar arquivos de JavaScript.');
        }
        res.render('listagemJs', { arquivos: files });
    });
});

// Rota para a listagem de CSS
router.get('/listagem-css', (req, res) => {
    const cssPath = path.join(__dirname, '../public/css');
    fs.readdir(cssPath, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar arquivos de CSS.');
        }
        res.render('listagemCss', { arquivos: files });
    });
});


module.exports = router;
