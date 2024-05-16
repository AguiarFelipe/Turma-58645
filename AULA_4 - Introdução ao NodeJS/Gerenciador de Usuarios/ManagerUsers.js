const fs = require('fs').promises;
const path = require('path')

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
}

module.exports = ManagerUsers;