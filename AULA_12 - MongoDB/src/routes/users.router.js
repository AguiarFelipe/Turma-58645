const router = require('express').Router();
const userModel = require('../models/users.model.js');


router.get('/', async(req, res)=>{
    try{
        let users = await userModel.find();
        res.send({result:"Sucesso", payload:users});
    }catch(error){
        console.log(error);
    }
});


router.post('/', async(req, res)=>{
    let {first_name, last_name, email} = req.body;
    if(!first_name||!last_name||!email){
        return res.send("Dados incompletos");
    }

    let result = await userModel.create({
        first_name,
        last_name,
        email
    });
    res.send({result:"Sucesso", payload:result});
});

router.put('/:uuid', async (req, res)=>{
    let {uuid} = req.params;
    let userToReplace = req.body;

    if(!userToReplace.first_name||!userToReplace.last_name||!userToReplace.email){
        return res.send({status:"Error", erro:"Dados incompletos"});
    }

    let result = await userModel.updateOne({_id:uuid},userToReplace);
    res.send({status:"Sucesso", payload:result});
});

router.delete('/:uuid', async (req, res)=>{
    let {uuid} = req.params;
    let result = await userModel.deleteOne({_id:uuid});
    res.send({status:"Sucesso", payload:result});
});



module.exports = router;