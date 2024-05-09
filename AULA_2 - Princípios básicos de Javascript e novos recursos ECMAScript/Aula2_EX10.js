// let variavelProva = undefined;
// let variavelPreenchida = variavelProva||'Sem valor';
// console.log(variavelPreenchida);

// let variavelNullish = variavelProva??'Sem valor';

// console.log(variavelNullish);

class Persona {
    #fullname;

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.#fullname = `${this.nome} ${this.sobrenome}`;
    }

    getFullname = () => this.#fullname;
}

let instancia1 = new Persona('José', 'da Silva');


console.log(instancia1.getFullname());