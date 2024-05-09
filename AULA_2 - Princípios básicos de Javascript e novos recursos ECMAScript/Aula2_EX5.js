const x = 'declarada no escopo global';

function example(){
    const y = 'declarada no escopo da função';
    console.log(x)
}
const y = 'Fora do escopo da função';
example();
console.log(y);