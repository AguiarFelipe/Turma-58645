const express = require('express');
const handlebars = require('express-handlebars');
const viewRouter = require('./routes/viewRouter.js');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', __dirname+'/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.use('/', viewRouter);

app.listen(8080, ()=>{console.log("Servidor ouvindo na porta 8080")});