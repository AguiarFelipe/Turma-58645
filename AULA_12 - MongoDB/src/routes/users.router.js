const router = require('express').Router();
const uploader = require('../utils.js');

let users=[];
router.get('/', (req, res)=>{
    res.send({status:"Sucesso", payload:users});
});

router.post('/', uploader.single('file'), (req, res)=>{
    if(!req.file){
        res.status(400).send({status:"Erro", erro:"Não foi possível realizar o upload"});
    }

    let user = req.body;
    user.profile = req.file.path;
    users.push(user);
    res.send({status:"Sucesso", mensagem:"Usuário cadastrado"});
});

module.exports = router;