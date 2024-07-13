const mongoose = require('mongoose');
const coursesCollection = 'courses';


const coursesSchema = new mongoose.Schema({
    title:String,
    description:String,
    dificulty:Number,
    topics:{
        type:Array,
        default:[]
    },
    professor:String,
    students:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model(coursesCollection, coursesSchema);