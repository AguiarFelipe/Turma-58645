import Business from "../dao/classes/business.dao.js";

const businessService = new Business();
export const getBusiness = async (req, res)=>{
    let result = await businessService.getBusiness();
    if(!result){
        return res.status(500).send({status:"Error", error:"Algo deu errado! Tente novamente mais tarde"});
    }
    res.send({status:"Sucess", result:"getBusiness"});
};
export const getBusinessById = async (req, res)=>{
    const {bid} = req.params;
    let result = await businessService.getBusinessById(bid);
    if(!result){
        return res.status(500).send({status:"Error", error:"Algo deu errado! Tente novamente mais tarde"});
    }
    res.send({status:"Sucess", result:"getBusinessById"});
};
export const createBusiness = async (req, res)=>{
    const business = req.body;
    let result = await businessService.saveBusiness(business);
    if(!result){
        return res.status(500).send({status:"Error", error:"Algo deu errado! Tente novamente mais tarde"});
    }
    res.send({status:"Sucess", result});
};
export const addProduct = async (req, res)=>{
    let product = req.body;
    let business = await businessService.getBusinessById(req.params.bid);
    business.products.push(product);
    await businessService.updateBusiness(business._id, business);
    res.send({status:"Success", result:"Business updated"});
};