//Vamos usar este array de teste
let valoresOriginais = [1,2,3,4,5];

//Estamos acostumados a ler a função map da seguinte maneira
let novosValores = valoresOriginais.map(x=>x+1);//novoValores terá [2,3,4,5,6]
//Porém o que colocamos dentro da função map é uma arrow function, que indica que o valor
//atual da posição do array será acrescido em +1
// console.log(novosValores);

let outrosValores = valoresOriginais.map(x=>x*2);//outrosValores terá [2,4,6,8,10]
let maisValores = valoresOriginais.map(x=>"a");//maisValores terá ["a","a","a","a","a"]

const funcCallback = (param) => {

    if(param%2===0){
        return param;
    }else{
        return "não é par"
    }
}

//Aqui passamos a função de callback como parâmetro da função map
const verificarPares = valoresOriginais.map(funcCallback);

console.log(verificarPares);//O resultado será ["não é par",2,"não é par",4,"não é par"]
