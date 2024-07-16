const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const userCollection = 'users';


const userSchema = new mongoose.Schema({
    first_name:{type: String, index:true},
    last_name:String,
    email: String,
    gender: String
});

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model(userCollection, userSchema);