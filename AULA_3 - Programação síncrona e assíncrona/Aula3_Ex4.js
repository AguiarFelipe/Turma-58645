const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{//Observe que ao criar uma promise, estamos passando um callback com dois parâmetros: resolv e reject
        if(divisor===0){
            reject('Não pode dividir por zero');
            /**
             * Rejeitamos a operação porque não é possível trabalhar com divisão por zero, não posso cumprir a promessa que
             * fiz ao usuário sobre a divisão de seus números
             */
        }else{
            resolve(dividendo/divisor);
            /**
             * Se os valores forém válidos, então sim posso cumprir a promessa que fiz ao usuário de dividir seus números, portanto,
             * usaremos o valor
             */
        }
    })
}

// console.log(dividir(4,2));

dividir(6,0) //Chamamos a função como qualquer caso
.then(resultado=>{
    console.log(resultado)//Neste caso, como não é divisão por 0, a promessa será cumprida e o resultado será 2
    /**
     * Programamos o then para receber quaisquer "RESOLVE" da promise (ou seja, usamos then para receber os casos em que
     * sabemos que a função será bem-sucedida). O parâmetro "resultado" será o valor retornado pela resolução da promise
     */
})
.catch(error=>{
    console.log(error)
    /**
     * Também programamos um catch para receber qualquer "REJECT" da promise (ou seja, usamos catch para PEGAR os
     * erros que a promise nos lança, a fim de entender o motivo pelo qual nossa promise não pode ser cumprida corretamente),
     * o parâmetro "erro" será o valor retornado pela rejeição da promise.
     */
});

// dividir(5,0) 
// .then(resultado=>{
//     console.log(resultado)
// })
// .catch(error=>{
//     console.log(error)
//     /**
//      * Neste caso, como o divisor é zero, a promessa não pode ser resolvida e entrará neste bloco catch, indicando o motivo
//      * essa promise não pôde ser resolvida. Desta forma, temos o controle dos casos em que tudo corre bem, mas TAMBÉM controlamos
//      * os casos em que algo dá errado
//      */
// });
