const fs = require('fs');

class escreverArquivo {
    constructor(nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }

    escrever(texto, callback) {
        fs.writeFile(this.nomeArquivo, texto, (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                return;
            }
            callback(); // Chama o callback depois de escrever no arquivo
        });
    }
}

module.exports = escreverArquivo;