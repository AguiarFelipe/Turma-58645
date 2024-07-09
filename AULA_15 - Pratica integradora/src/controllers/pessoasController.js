const Pessoa = require('../models/pessoaModel.js');

exports.createPessoa = async (req, res) => {
    try {
        const { nome, sobrenome, email, dataNascimento } = req.body;
        const imagem = req.file.filename;

        const novaPessoa = new Pessoa({ nome, sobrenome, email, dataNascimento, imagem });
        await novaPessoa.save();

        res.redirect('/pessoas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.find();
        res.render('listagemPessoas', { pessoas });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.excluirPessoa = async (req, res) => {
    let { uid } = req.params;
    console.log("UID -> "+uid);
    try {
        const pessoa = await Pessoa.findByIdAndDelete(uid);
        
        if (!pessoa) {
            return res.status(404).json({ success: false, msg: 'Pessoa não encontrada' });
        }
        res.json({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};