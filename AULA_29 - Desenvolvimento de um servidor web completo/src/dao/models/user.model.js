import mongoose from "mongoose";

const collection = 'Users';
const schema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Orders'
        }
    ]
});

const usersModel = mongoose.model(collection, schema);
export default usersModel;