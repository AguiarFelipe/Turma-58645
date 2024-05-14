function soma(a, b){
    return new Promise((resolve, reject)=>{
        if(a===0||b===0){
            reject("Operação desnecessária");
        }else if(a+b<0){
            reject("A calculadora deve retornar somente valores positivos");
        }else{
            resolve(a+b);
        }
    });
}

function subtracao(a, b){
    return new Promise((resolve, reject)=>{
        if(a===0||b===0){
            reject("Operação desnecessária");
        }else if(a-b<0){
            reject("A calculadora deve retornar somente valores positivos");
        }else{
            resolve(a-b);
        }
    });
}

function multiplicacao(a, b){
    return new Promise((resolve, reject)=>{
        if(a<0||b<0){
            reject("Operação desnecessária");
        }else{
            resolve(a*b);
        }
    });
}

function divisao(a, b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject("Operação desnecessária");
        }else{
            resolve(a/b);
        }
    });
}

async function calculadora(){
    try{
        console.log("Operação de soma: ", await soma(3, 17));
        console.log("Operação de subtracao: ", await subtracao(10, 4));
        console.log("Operação de multiplicacao: ", await multiplicacao(4, 15));
        console.log("Operação de divisao: ", await divisao(8, 4));
    }catch(error){
        console.log(error);
    }
}

calculadora();