// const user = 'Pedro';
// user = 'João';//TypeError: Assignment to constant variable.

const user = {name:'Pedro', idade: 12};
user.name = 'João';

console.log(user.idade);