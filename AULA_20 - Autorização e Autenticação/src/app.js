const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const sessionRouter = require('./routes/sessionRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const passport = require('passport');
const initialiePassport = require('./config/passport.config.js');


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

initialiePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRouter);
app.use('/api/sessions', sessionRouter);
app.set('views', __dirname+'/views');

app.listen(8080,()=>{
    console.log('Servidor ouvindo na porta 8080');
});
