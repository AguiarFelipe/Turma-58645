import mongoose from "mongoose";

const collection = 'Orders';
const schema = new mongoose.Schema({
    number:Number,
    business:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Business'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    products:[],
    status:String,
    totalPrice:Number
});

const orderModel = mongoose.model(collection, schema);
export default orderModel;