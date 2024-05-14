//Utilizaremos este array como prova
let arrayDeProva = [1,2,3,4,5];
const minhaFuncaoMap = (array, callBack) => {
    let novoArray = [];
    for(let x=0; x<array.length;x++){
        let novoValor = callBack(array[x]);//Observe que o callback recebido por parâmetro é executado aqui
        novoArray.push(novoValor);
    }
    return novoArray;
}
//vamos comparar nossa função com um callback e função map
// let novoArrayProprio = minhaFuncaoMap(arrayDeProva, x=>x*2);//O novo array sera [2,4,6,8,10]
// let novoArrayComMap = arrayDeProva.map(x=>x*2);//O array será [2,4,6,8,10]
/**
 *Note que não há diferença. Acabamos de recriar a função map para entender seu funcionamento
 *interno e vermos onde ela utiliza o callback que enviamos como parâmetro

  *EXTRA: Se quisermos que a função seja executada no mesmo array e não tenhamos que passá-la como parâmetro,
  *devemos adicionar nossa função no protótipo (prototype) do objeto array 
  */
 Array.prototype.minhaFuncaoMap = function(callback){
    let novoArray = [];
    for(let x=0; x<this.length;x++){
        let novoValor = callback(this[x]);//Observe que o callback recebido por parâmetro é executado aqui
        novoArray.push(novoValor);
    }
    return novoArray;
 }
 let arrayProva = [1,2,3,4,5];
 let novosValores = arrayProva.minhaFuncaoMap(x=>x+1);
 console.log(novosValores);