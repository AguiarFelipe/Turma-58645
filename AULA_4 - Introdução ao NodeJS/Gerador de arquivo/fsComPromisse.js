const fs = require('fs');
const operacoesAssincronas = async()=>{//Observe que a operação deve ser assíncrona, pois trabalharemos com promisses
    try {
        // Escrevendo o arquivo
        await fs.promises.writeFile('./exemploPromisse.txt', 'Olá promisse!');

        // Lendo o conteúdo do arquivo
        let resultado = await fs.promises.readFile('./exemploPromisse.txt', 'utf-8');
        console.log(resultado);

        // Modificando o arquivo
        await fs.promises.appendFile('./exemploPromisse.txt', '\nMais conteúdo');

        // Lendo o arquivo novamente
        resultado = await fs.promises.readFile('./exemploPromisse.txt', 'utf-8');
        console.log(resultado);

        // Adicionando um atraso de 5 segundos antes de excluir o arquivo
        setTimeout(async () => {
            await fs.promises.unlink('./exemploPromisse.txt');
            console.log('Arquivo excluído com sucesso!');
        }, 8000); // 5000 milissegundos = 5 segundos
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

operacoesAssincronas();