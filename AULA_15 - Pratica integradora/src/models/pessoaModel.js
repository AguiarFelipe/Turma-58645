const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
