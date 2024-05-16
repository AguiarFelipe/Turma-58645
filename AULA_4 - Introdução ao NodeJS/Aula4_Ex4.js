//Exemplo com setInterval
let contador = ()=>{
    let counter=1;
    console.log("Executando operação");
    let timer=setInterval(()=>{
        console.log(counter++);
        if(counter>5){
            clearInterval(timer);//após contar 5
        }
    }, 1000);
    /**
     * Sendo um intervalo, o console.log(counter++)
     * a cada 1000 milissegundos (1 segundo)
     */
}
console.log("Iniciando tarefa");
contador();
console.log("Tarefa finalizada");
/**
 * Ordem de exibição
 * Iniciando tarefa
 * Executando operação
 * Tarefa finalizada
 * 1 (após 1 segundo)
 * 2 (após 1 segundo)
 * 3 (após 1 segundo)
 * 4 (após 1 segundo)
 * 5
 */