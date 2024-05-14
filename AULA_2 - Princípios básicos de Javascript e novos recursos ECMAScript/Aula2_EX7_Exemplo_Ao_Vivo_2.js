let impostos = {
    imposto1:110,
    imposto2:220,
    imposto3:330,
    imposto4:440
}

// let parChaveValor = Object.entries(impostos);
// console.log(parChaveValor);

// let apenasPropriedades = Object.keys(impostos);
// console.log(apenasPropriedades);

let apenasValores = Object.values(impostos);
console.log(apenasValores);

let impostosTotais = apenasValores.reduce((valorInicial, valorAcumulado)=>valorAcumulado+valorInicial);
console.log(impostosTotais);