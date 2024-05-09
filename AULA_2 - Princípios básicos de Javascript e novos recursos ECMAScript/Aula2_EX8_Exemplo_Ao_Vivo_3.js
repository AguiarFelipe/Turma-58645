let objeto1={
    propriedade1: 2,
    propriedade2: "b",
    propriedade3: true
}

let objeto2={
    propriedade4: "c",
    propriedade5: [2,3,4,5]
}

let {propriedade1, propriedade2} = objeto1;
let objeto3 = {...objeto1, ...objeto2}

console.log(objeto3);