const mongoose = require('mongoose');
const studentsCollection = 'students';


const studentsSchema = new mongoose.Schema({
    first_name:{type: String, index:true},
    last_name:String,
    email: String,
    gender: String,
    courses:{
        type:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"courses"
                }
            }
        ]
    }
});

studentsSchema.pre('find', function(){
    this.populate('courses.course');
});

module.exports = mongoose.model(studentsCollection, studentsSchema);