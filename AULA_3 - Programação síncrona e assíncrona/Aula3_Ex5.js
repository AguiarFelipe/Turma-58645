new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1), 1000); //(*)
})
.then(result=>{//(**)
    console.log(result);// 1
    return result*2;
}).then(result=>{// (***)
    console.log(result)// 2
    return result*2;
}).then(result=>{//(****)
    console.log(result)// 4
    return result*2;
})

//1) A promise inicial se resolve em 1 segundo (*)
//2) Então é chamado o controlador .then(**)
//3) E o valor devolvido é passado para o próximo controlador .then(***)