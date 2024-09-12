const soma = (...nums)=>{

    if(nums.length===0){return 0;}
    if(!nums.every(num=>typeof num==="number")){return null;}
    return nums.reduce((current, prev)=> prev+current);


    // if(nums.length==0){return 0;};
    // let validInput = true;
    // for(let index=0;index<nums.length && validInput;index++){
    //     if(typeof nums[index]!=="number"){
    //         validInput = false;
    //     };
    // };
    // if(!validInput){return null;}
    // let result = 0;
    // for(let index=0;index<nums.length;index++){
    //     result += nums[index];
    // };
    // return result;
    
    // if(!num1||!num2){
    //     return 0;
    // }

    // if(typeof num1!=="number" || typeof num2!=="number"){
    //     return null;
    // }

    // let result = num1+num2;
    // return result;
};

let testesAprovados = 0;
let testesTotais = 4;

console.log('Teste 1: A função deve retornar null se algum argumento não for númerico');
restultTest1 = soma("2",2);
if(restultTest1 === null){
    console.log('Teste 1 aprovao!\n\n');
    testesAprovados++;
}else{
    console.log(`Falha no Teste 1: Recebido ${typeof restultTest1}, Esperado null\n`);
}

console.log('Teste 2: A função deve retornar 0 se nenhum parâmetro for passado');
restultTest2 = soma();
if(restultTest2 == 0){
    console.log('Teste 2 aprovao!\n\n');
    testesAprovados++;
}else{
    console.log(`Falha no Teste 2: Recebido ${restultTest2}, Esperado 0\n`);
}

console.log('Teste 3: A função deve ser capaz de fazer a soma corretamente');
restultTest3 = soma(2,3);
if(restultTest3 === 5){
    console.log('Teste 3 aprovao!\n\n');
    testesAprovados++;
}else{
    console.log(`Falha no Teste 3: Recebido ${restultTest3}, Esperado 5\n`);
}

console.log('Teste 4: A função deve capaz de somar quaisquer números passados');
restultTest4 = soma(1,2,3,4,5);
if(restultTest4 === 15){
    console.log('Teste 4 aprovao!\n\n');
    testesAprovados++;
}else{
    console.log(`Falha no Teste 4: Recebido ${restultTest4}, Esperado 15`);
}