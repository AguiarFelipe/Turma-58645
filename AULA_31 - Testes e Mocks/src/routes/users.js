import { Router } from "express";
import {generateUser} from '../utils.js';

const router = Router();

router.get('/', async(req, res)=>{
    let users=[];
    for(let i=0;i<=100;i++){
        users.push(generateUser());
    }
    res.send({sataus:"Sucesso", payload:users});
});

export default router