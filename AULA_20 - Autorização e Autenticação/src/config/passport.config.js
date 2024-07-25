const passport = require('passport');
const local = require('passport-local');
const userService = require('../models/User.js');
const {createHash, isValid} = require('../utils.js');
const LocalStrategy = local.Strategy;

const initializePassport = () => {
    console.log("Iniciando strategy de registro")
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField:'email'}, async (req, username, password, done)=>{
            const {first_name, last_name, email, age} = req.body;
            try{
                let user = await userService.findOne({email:username});
                if(user){
                    console.log("O usuário já existe");
                    return done(null, false);
                }
                const novoUsuario = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password:createHash(password)
                };
                let result = await userService.create(novoUsuario);
                console.log("Usuario criado com sucesso!", result);
                return done(null, result);
            }catch(error){
                console.log("Erro ao registrar o usuário: ",error);
                return done(`Ocorreu uma falha ao registrar o usuário ${error}`);
            }

        }
    ));
    passport.serializeUser((user, done)=>{
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done)=>{
        let user = await userService.findById(id);
        done(null, user);
    });

    passport.use('login', new LocalStrategy({usernameField:'email'}, async(username, password, done)=>{
        try{
            const user = await userService.findOne({email:username});
            if(!user){
                console.log("O usuário não existe");
                return done(null, false);
            }
            if(!isValid(user, password)){
                console.log("Senha inválida");
                return done(null, false);
            }
            return done(null, user);
        }catch(error){
            return done(error)
        }
    }));
};

module.exports = initializePassport;