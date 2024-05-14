const somar = (numero1, numero2) => numero1+numero2;
const subtrair = (numero1, numero2) => numero1-numero2;
const multiplicar = (numero1, numero2) => numero1*numero2;
const dividir = (numero1, numero2) => numero1/numero2;

const realizarOperacao = (numero1, numero2, callback) => {
    console.log("Vou fazer uma operação, não sei qual, mas vou!");
    let resultado = callback(numero1, numero2);
    /**
     * Não saberemos qual das 4 funções será, mas isso não importa, apenas executamos e retornamos o resultado
     */
    console.log(`O resultado da operação, que eu não sabia qual era, é:${resultado}\n\n`);
}

realizarOperacao(2,5,somar);//O resultado da operação, que eu não sabia qual era, é: 7
realizarOperacao(2,5,subtrair);//O resultado da operação, que eu não sabia qual era, é: -3
realizarOperacao(2,5,multiplicar);//O resultado da operação, que eu não sabia qual era, é: 10
realizarOperacao(2,5,dividir);//O resultado da operação, que eu não sabia qual era, é: 0.4

/**
 * Vamos analisar
 * realizarOperacao recebe uma função de callback e executa ela dentro, maaaaas... Ele não tem ideia do que a função faz, apenas
 * o executa! Portanto devemos sempre ter muito cuidado com o que passamos como callback, pois no caso de passar uma função que não é
 * compatível com os valores com os quais a função está trabalhando, poderíamos quebrar o código para o qual passamos o callback
 */