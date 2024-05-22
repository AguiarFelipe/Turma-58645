const ManagerUsers = require('./ManagerUsers.js')

const manager = new ManagerUsers();

const novoUsuario = {
    nome:'Julio',
    sobrenome:'Pereira',
    idade:30,
    curso:'Letras',
    password: '123A'
}

manager.criarUsario(novoUsuario)
.then(()=>{
    return manager.consultarUsuarios();
})
.then((users)=>{
    console.log('Usuario salvo');
    console.log(users);

    return manager.validateUsers('Chaves', '123a');
})
.then((resultadoValidacao)=>{
    console.log(resultadoValidacao)
})
.catch((error)=>{
    console.log('Ocorreu um erro na operação do arquivo: ', error);
})