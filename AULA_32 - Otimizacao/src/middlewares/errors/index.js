import EErrors from "../../services/errors/enums.js";

export default (error, req, res, next)=>{
    console.log(error.cause);
    switch(error.cause){
        case EErrors.INVALID_TYPES:
            res.send({status:"Error", error:error.name});
            break;
        default:
            res.send({status:"Error",  error: "Unhandled error"});
            break;
    }
}