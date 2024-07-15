const mongoose = require('mongoose');

const pedidosCollection = 'pedidos';

const pedidosSchema = mongoose.Schema({
    nome: String,
    tamanho:{
        type: String,
        enum: ['pequeno', 'medio', 'grande'],
        default:'medio'
    },
    preco: Number,
    quantidade: Number,
    date: Date
});

const pedidosModel = mongoose.model(pedidosCollection, pedidosSchema);

module.exports = pedidosModel;