const fs = require('fs');
//Conforme discutimos nos slides, o fs nos permitirá acessar operações do arquivo

fs.writeFileSync('./exemplo.txt', 'Olá turma 58645, escrevemos no arquivo');
/**
 * Primeira operação: para escreve um arquivo o primeiro parâmetro/argumento é o caminho e
 * o nome do arquivo no qual trabalharemos. O segundo argumento é o conteúdo.
 * Super simples não!
 */
if(fs.existsSync('./exemplo.txt')){//existSync retorna true se existir o arquivo e false quando não.
    let conteudo = fs.readFileSync('./exemplo.txt', 'utf-8');
    /**
     * readFyleSync lê o conteúdo do arquivo, é importante que nosso segundo parâmetro coloquemos o
     * tipo de codificação que usaremos para lê-lo.Neste curso, abordaremos apenas o utf-8
     */
    console.log(conteudo);
    fs.appendFileSync('./exemplo.txt', '\nAdicionando mais conteúdo');
    /**
     * appendFileSync procurará o caminho do arquivo primeiro, se não existir ele o criará, se encontrar
     * em vez de sobrescrever o arquivo inteiro, ele apenas colocará o conteúdo no final
     */
    conteudo = fs.readFileSync('./exemplo.txt','utf-8')
    //Lemos o conteúdo do arquivo novamente
    console.log(conteudo);
    
    setTimeout(() => {
        fs.unlinkSync('./exemplo.txt');
        console.log('Arquivo excluído com sucesso!');
    }, 8000);
    //Por fim, essa linha de código excluirá o arquivo, independentemente de todo conteúdo dele.
}

