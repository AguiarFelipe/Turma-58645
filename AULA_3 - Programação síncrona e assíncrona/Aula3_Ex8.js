const dividir = (dividendo, divisor) =>{
    return new Promise((resolve, reject)=>{//Observe que ao criar uma promise, estamos passando um callback com 2 parâmetros: resolve e reject
        if(divisor===0){
            reject('Não pode dividir por zero')
            /**
             * Rejeitamos a operação porque não é possível trabalhar com divisão por zero, não posso cumprir a promessa que
             * fiz ao usuário sobre a divisão de seus números
             */
        }else{
            resolve(dividendo/divisor)
            /**
             * Se os valores forem válidos, então sim posso cumprir a promessa que fiz ao usuário de dividir seus números, portanto,
             * usaremos o valor
             */
        }
    })
}

const funcaoAssincrona = async() => {
    /**
     * Estamos inicializando um ambiente assíncrono completo, tudo dentro das chaves da função se comportará sem bloqueio
     * com o exterior.
     */
    try{
        //Incluímos a operação a ser realizada em um bloco try, porque sendo uma promise, PODERIA NÃO SER CUMPRIDA, portanto devemos estar preparados
        let resultado = await dividir(10,5)//Não há mais .then, agora é só ESPERAR pelo resultado da promessa.
        console.log(resultado);
    }catch(error){
        //O bloco catch é obrigatório após um try{} e funciona da mesma forma que .catch, para capturar erros.
        console.log(error);
    }
}
funcaoAssincrona(); //Como o ambiente de execução assíncrona reside em uma função. Você tem que executá-lo no final.

