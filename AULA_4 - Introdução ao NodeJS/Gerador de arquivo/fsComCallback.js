const fs = require('fs');
fs.writeFile('./exemploCallback.txt', 'Saudações do callback', (error)=>{
    /**
     * Observemos que a operação é semelhante, o detalhe é que agora estamos colocando
     * um callback para perguntar se algo deu errado durante a gravação do arquivo
     */
    if(error) return console.log('Erro ao gravar arquivo')//verifica se existe o "error" no callback
    fs.readFile('./exemploCallback.txt','utf-8', (error, resultado)=>{
        /**
         * Os mesmos argumentos do readFileSync, só que desta vez no final colocamos um callback, onde o 
         * primeiro argumento/parâmetro serve para saber se houve alugm erro na leitura do arquivo, o segundo 
         * é o resultado da leitura
         */
        if(error) return console.log('Erro ao ler o arquivo')//observe que cada retorno de chamada está ciente de seu erro
        console.log(resultado);//Se não houver erro, o resultado será: Saudações do callback
        fs.appendFile('./exemploCallback.txt', ', mais do callback',(error)=>{
            /**
             * Até este ponto você deve estar se preocupando... Estou configurando um callback hell?
             * Tenham muito cuidado ao trabalhar com callbacks e arquivos!
             */
            if(error) return console.log('Erro ao atualizar o arquivo');//Verificamos se houve erro ao atualizar o arquivo
            fs.readFile('./exemploCallback.txt', 'utf-8',(error, resultado)=>{
                /**
                 * Lemos o arquivo novamente, para validar a nova alteração
                 */
                if(error) return console.log("Erro na leitura do arquivo")
                console.log(resultado);//Se correr tudo bem, deve mostrar "Saudações do callback, mais do callback"
                setTimeout(() => {
                    fs.unlink('./exemploCallback.txt', (error)=>{
                        if(error) return console.log('Não foi possível excluir o arquivo');
                    });
                    console.log('Arquivo excluído com sucesso!');
                }, 8000);
            })
        })
    })
})