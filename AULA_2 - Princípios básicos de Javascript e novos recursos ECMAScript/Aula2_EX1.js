// let i=0;
// function foo(){
//     i = 1;
//     let j = 2;
//     if(true){
//         console.log(i);
//         console.log(j);
//     }
// }
// foo();

// function foo(){
//     let i = 1;
//     if(true){
//         let i = 2;
//         console.log(i);
//     }
//     console.log(i);
// }
// foo();

function foo(){
    if(true){
        let i = 2;
    }
    console.log(i);
}
foo();