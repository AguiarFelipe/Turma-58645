const temporizador = (callback)=>{
    setTimeout(()=>{
        callback();
    }, 5000);
}

let operacao = ()=>console.log("Executando operação");

console.log("Iniciando a tarefa");
temporizador(operacao);//Colocamos a "operacao" no temporizador.
console.log("Finalizando a tarefa");
/**
 * Ordem de exibição
 * Iniciando tarefa
 * Finalizando tarefa
 * Executando operação
 * 
 * 
 * Tarefa "operacao" teve que aguardar 5000 milissegundos (5 segundos para executar)
 * para poder rodar, mas sendo assíncrono, o programa pôde continuar
 * e foi capaz de terminar sem esperar pela referida tarefa
 */