// const express = require('express');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const FileStore = require('session-file-store');
// const MongoStore = require('connect-mongo');

// const app = express();
// const fileStorage = FileStore(session);
// app.use(cookieParser());
// app.use(session({
//     // store:new fileStorage({path:'./sessions', ttl:100, retries:0}),
//     store:MongoStore.create({
//         mongoUrl:'mongodb+srv://coderTurma:!As123456@codercluster2.ngaf2zc.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster2',
//         mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true}
//     }),
//     secret:"coderHouse",
//     resave:false,
//     saveUninitialized:false
// }));


// function auth(req, res, next){
//     if(req.session?.user === 'pepe' && req.session?.admin){
//         return next();
//     }
//     return res.status(401).send('Erro de autenticação');
// }

// app.use(session({
//     secret:"Coder",
//     resave:true,
//     saveUninitialized:true
// }));

// app.get('/session', (req, res)=>{
//     if(req.session.counter){
//         req.session.counter++
//         res.send(`Você visitou o site ${req.session.counter} vezes`);
//     }else{
//         req.session.counter = 1;
//         res.send("Bem-vindo");
//     }
// });

// app.get('/logout', (req, res)=>{
//     req.session.destroy(err=>{
//         if(!err)res.send('Logout OK!');
//         else res.send({status:"Error", body:err});
//     });
// });

// app.get('/login', (req, res)=>{
//     const {username, password} = req.query
//     if(username!=='pepe'||password !=='pepepass'){
//         return res.send('Login failed');
//     }
//     req.session.user = username
//     req.session.admin = true;
//     res.send('Login sucess');
// });

// app.get('/privado', auth, (req, res)=>{
//     res.send('Se você visualizou está página, você já está autenticado');
// });

// app.get('/logout', (req, res)=>{
//     req.session.destroy(err=>{
//         if(err){
//             return res.json({status:'Logout error', body:err});
//         }
//         res.send('Logout OK!');
//     });
// });

// app.listen(8080, ()=>{console.log("Servidor ouvindo na porta 8080")});

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const sessionRouter = require('./routes/sessionRoutes.js');
const userRouter = require('./routes/userRoutes.js');


const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret:'AlunosCoderHouse',
    resave:false,
    saveUninitialized:false
}));

mongoose.connect('mongodb+srv://coderTurma:!As123456@codercluster2.ngaf2zc.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster2',
    {useNewUrlParser:true, useUnifiedTopology:true});

app.use('/', userRouter);
app.use('/api/sessions', sessionRouter);
app.set('views', __dirname+'/views');

app.listen(8080,()=>{
    console.log('Servidor ouvindo na porta 8080');
});
