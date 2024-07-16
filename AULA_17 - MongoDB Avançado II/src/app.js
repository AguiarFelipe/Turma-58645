const pedidosModel = require('./model/pedidos.js');
const usersModel = require('./model/users.model.js');

const mongoose = require('mongoose');


const environment = async()=>{
    
    // await mongoose.connect('mongodb://localhost:27017/pizzaria');
    
    // let result = await pedidosModel.aggregate([
    //     {//Stage 1
    //         $match: {tamanho:'medio'}
    //     },
    //     {//Stage 2
    //         $group: {_id: '$nome', total: {$sum: '$quantidade'}}
    //     },
    //     {//Stage 3
    //         $sort: {total:-1}
    //     },
    //     {//Stage 4
    //         $group: {_id:1, pedidos: {$push:"$$ROOT"}}
    //     },
    //     {//Stage 5
    //         $project:{
    //             "_id":0,
    //             pedidos: "$pedidos"
    //         }
    //     },
    //     {//Stage 6
    //         $merge:{
    //             into:"reports"
    //         }
    //     }
    // ]);
    // const reportsCollection = mongoose.connection.collection('reports');
    // const reports = await reportsCollection.find().toArray();
    // console.log(JSON.stringify(reports, null, 2));

    await mongoose.connect('mongodb://localhost:27017/users');

    let users = await usersModel.paginate({gender:"Female"}, {limit:2, page:2});
    console.log(users);
}

environment();