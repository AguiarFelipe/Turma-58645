const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const sessionRouter = require('./routes/session.router.js');
const viewsRouter = require('./routes/views.router.js');
const passport = require('passport');
const initialiePassport = require('./config/passport.config.js');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'AlunosCoderHouse',
    resave: false,
    saveUninitialized: false
}));

mongoose.connect('mongodb+srv://coderTurma:!As123456@codercluster2.ngaf2zc.mongodb.net/?retryWrites=true&w=majority&appName=CoderCluster2',
    { useNewUrlParser: true, useUnifiedTopology: true });

initialiePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/', viewsRouter);
app.use('/api/sessions', sessionRouter);

app.listen(8080, () => {
    console.log('Servidor ouvindo na porta 8080');
});
