const mongoose = require('mongoose');

class MongoSingleton {
    static #instance

    constructor(){
        mongoose.connect('mongodb://localhost:27017/AulaCoder27',{useNewUrlParser: true, useUnifiedTopology: true});
    }

    static getInstance(){
        if(this.#instance){
            console.log('Já esta conectado');
            return this.#instance;
        }
        this.#instance = new MongoSingleton();
        console.log("Conectado");
        return this.#instance
    }
}

module.exports = MongoSingleton;