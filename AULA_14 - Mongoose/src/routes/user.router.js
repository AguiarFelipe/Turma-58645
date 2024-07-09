const router = require('express').Router();
const userModel = require('../model/user.model.js');

//Create
router.post('/', async(req,res)=>{
    let {first_name, last_name, email} = req.body;
    if(!first_name||!last_name||!email){
        console.log('Dados incompletos');
    }

    let result = await userModel.create({
        first_name,
        last_name,
        email
    });

    res.send({status:"Sucesso", payload:result});
});

//Read
router.get('/', async (req, res)=>{
    try{
        let user = await userModel.find();
        res.send({result:"Sucesso", payload:user});
    }catch(error){
        console.log("Ocorreu um erro: "+error);
    }
});

//Update
router.put('/:uid', async(req, res)=>{
    let {uid} = req.params;
    let userToReplace = req.body;
    if(!userToReplace.first_name||!userToReplace.last_name||!userToReplace.email){
        console.log('Dados incompletos');
    }

    let result = await userModel.updateOne({_id:uid},userToReplace);
    res.send({status:'Sucesso', payload:result});
});

//Delete
router.delete('/:uid', async(req, res)=>{
    let {uid} = req.params;

    let result = await userModel.deleteOne({_id:uid});
    res.send({status:'Sucesso', payload:result});
});
module.exports = router;