const jwt = require('jsonwebtoken');

const PRIVATE_KEY = "CoderKeySecret";

const generateToken = (user)=>{
    const token = jwt.sign({user}, PRIVATE_KEY, {expiresIn:'24h'});
    return token;
}
const authToken = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).send({erro:"Not authenticated"});
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, PRIVATE_KEY, (erro, credentials)=>{
        if(erro){
            return res.status(403).send({erro:'Not authorized'});
        }
        req.user = credentials.user;
        next();
    });
}

module.exports = {
    generateToken,
    authToken
}