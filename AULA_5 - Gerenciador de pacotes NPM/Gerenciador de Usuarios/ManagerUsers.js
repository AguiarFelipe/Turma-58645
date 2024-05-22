const fs = require('fs').promises;
const path = require('path')
const crypto = require('crypto');

class ManagerUsers{
    constructor(){
        this.filePath = path.join(__dirname,'Users.json');
    }

    async criarUsario(user){
        let users = [];
        try{
            const data=await fs.readFile(this.filePath,'utf-8');
            users = JSON.parse(data);
        }catch(error){
            console.log(error);
        }

        const newPassword = crypto.createHash('sha256').update(user.password).digest('hex');
        user.password = newPassword;

        users.push(user);

        await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
        console.log('Usuario cadastrado com sucesso');
    }


    async consultarUsuarios(){
        try{
            const data = await fs.readFile(this.filePath, 'utf-8');
            const users = JSON.parse(data);

            return users;
        }catch(error){
            console.log(error);
        }
    }

    async validateUsers(nome, password) {
        try{
            const data = await fs.readFile(this.filePath, 'utf-8');
            const users = JSON.parse(data);
            const user = users.find(us=> us.nome === nome);
            if(user){
                const cryptedPassword = crypto.createHash('sha256').update(password).digest('hex');
                if(user.password === cryptedPassword){
                    return "Logado";
                }else{
                    return "Senha inválida";
                }

            }else{
                return "Usuário não existe";
            }
        }catch(error){
            console.log(error);
            return 'Não foi possível validar o usuário';
        }
    }
}

module.exports = ManagerUsers;