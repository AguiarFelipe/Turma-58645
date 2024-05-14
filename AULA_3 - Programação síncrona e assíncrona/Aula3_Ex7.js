const escreverArquivo = require('./escreverArquivo.js');

console.log('Inicio do programa');

//O criador desta função a definiu
//como não bloqueante, recebe um callback que
//executará apenas após escrever o arquivo
const escritor = new escreverArquivo('arquivoTeste.txt');
escritor.escrever('Olá mundo', ()=>{
    console.log('Terminou de escrever o arquivo.');
});
console.log('Final do programa');

//O resultado exposto na tela será:
// > Inicio do programa
// > Final do programa
// > Terminou de escrever o arquivo