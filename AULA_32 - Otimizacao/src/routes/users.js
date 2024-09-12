import { Router } from "express";
import CustomError from '../services/errors/CustomErrors.js';
import EErors from "../services/errors/enums.js";
import {generateUserErrorInfo} from "../services/errors/info.js";

const users = [];
const router = Router();

router.get('/', (req, res)=>{
    res.send({status:"Success", payload:users});
});

router.post('/', (req, res)=>{
    const {first_name, last_name, age, email} = req.body;
    if(!first_name||!last_name||!email){
        CustomError.createError({
            name:"User creation error",
            cause: generateUserErrorInfo({first_name, last_name, email}),
            message: "Error trying to create User",
            code: EErors.INVALID_TYPES
        });
    }
    const user = {first_name, last_name, age, email};
    if(users.length===0){
        user.id = 1;
    }else{
        users.id = users[users.length-1].id+1;
    }
    users.push(user);
    res.send({status:"Success", payload:user});
});


export default router;
