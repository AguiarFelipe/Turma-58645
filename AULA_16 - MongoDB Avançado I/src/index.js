const userModel = require('./models/users.model.js');
const courseModel = require('./models/courses.js');
const studentsModel = require('./models/students.js');
const mongoose = require('mongoose');

const environment = async()=>{
    await mongoose.connect('mongodb://localhost:27017/users');
    // await studentsModel.create({
    //     first_name:"Pedro",
    //     last_name:"Macedo",
    //     email:"pedro@gmail.com",
    //     gender:"Masculino"
    // });

    // await courseModel.create({
    //     title:"Curso de Back-End",
    // description:"Curso de back-end com a stack M.E.R.N",
    // dificulty:5,
    // topics:["MongoDB","ExpressJS","React","NodeJS"],
    // professor:"Felipe"
    // });

    let student = await studentsModel.find({_id:"668f1af208fd41369133ff5e"});
    console.log(JSON.stringify(student, null, '\t'));
    // student[0].courses.push({course:"668f1c478d8389300a9c9002"});

    // let result = await studentsModel.updateOne({_id:"668f1af208fd41369133ff5e"}, student[0]);

}

environment();