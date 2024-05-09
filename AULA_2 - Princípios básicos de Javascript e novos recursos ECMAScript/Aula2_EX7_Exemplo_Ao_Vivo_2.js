let impostos = {
    imposto1:121,
    imposto2:233,
    imposto3:555,
    imposto4:200
}

// let parChaveValor = Object.entries(impostos);
// console.log(parChaveValor);

// let apenasPropriedades = Object.keys(impostos);
// console.log(apenasPropriedades);

let apenasValores = Object.values(impostos);
// console.log(apenasValores);

let impostosTotais = apenasValores.reduce((valorInicial, valorAcumulado)=>valorAcumulado+valorInicial);
console.log(impostosTotais);