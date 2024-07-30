const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const userService = require('../models/User.js');

const initializePassport = () =>{
    passport.use('github', new GitHubStrategy({
        clientId:'Iv23liC7RElbNHxM2563',
        clientSecrect:'71292011e1a7e46962f04a00c45433176dadb017',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    }, async (accessToken, refreshToken, profile, done)=>{
        try{
            console.log(profile);
            let user = await userService.findOne({email:profile._json.email});
            if(!user){
                let newUser = {
                    first_name:profile._json.name || 'Default user',
                    last_name:profile._json.last_name || 'Default last name',
                    age: 18,
                    email: profile._json.email || 'Default email',
                    password: 'Fill this password'
                }
                let result = await userService.create(newUser);
                done(null, result);
            }else{
                done(null, user);
            }
        }catch(error){
            return done(error);
        }
    }));

    passport.serializeUser((user, done) =>{
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) =>{
        let user = await userService.findById(id);
        done(null, user);
    })
}

module.exports = initializePassport;