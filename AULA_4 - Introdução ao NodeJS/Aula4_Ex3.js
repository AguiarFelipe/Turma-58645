//Exemplo de operação síncrona
console.log("Iniciando tarefa");
console.log("Executando operação");
for(let contador=1; contador<=5; contador++){
    console.log(contador);
}
console.log("Tarefa finalizada");
/**
 * Ordem de exibição
 * Iniciando tarefa
 * 1
 * 2
 * 3
 * 4
 * 5
 * Tarefa finalizada
 * 
 * Novamente, tudo parece normal, a tarefa executa até
 * que o loop termine de contar, de 1 até 5
 * Como assíncrono funcionará com intervalo?
 */