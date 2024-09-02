import User from "../dao/classes/user.dao.js";

const userService = new User();

export const getUsers = async (req, res)=>{
    let result = await userService.getUsers();
    res.send({status:"Sucesso", result});
};
export const getUsersById = async (req, res)=>{
    const {uid} = req.params;
    let result = await userService.getUserById(uid);
    res.send({status:"Sucesso", result});
};
export const saveUser = async (req, res)=>{
    const user = req.body;
    console.log(user);
    let result = await userService.saveUser(user);
    res.send({status:"Sucesso", result});
};