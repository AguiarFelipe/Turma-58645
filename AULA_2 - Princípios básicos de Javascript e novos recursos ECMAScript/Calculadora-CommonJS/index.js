let modo = 'cálculos';

async function exemploImport(){
    if(modo = 'cálculos'){
        const {default: Calculadora} = await import('./Calculadora.js');
        let calculadora2 = new Calculadora();
        console.log(calculadora2.somar(10,20));
    }
}

exemploImport();