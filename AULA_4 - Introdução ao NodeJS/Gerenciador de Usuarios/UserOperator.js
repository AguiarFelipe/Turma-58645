const ManagerUsers = require('./ManagerUsers.js')

const manager = new ManagerUsers();

const novoUsuario = {
    nome:'João',
    sobrenome:'Pedro',
    idade:33,
    curso:'Astronomia'
}

manager.criarUsario(novoUsuario)
.then(()=>{
    return manager.consultarUsuarios();
})
.then((users)=>{
    console.log('Usuario salvo');
    console.log(users);
})
.catch((error)=>{
    console.log('Ocorreu um erro na operação do arquivo: ', error);
})