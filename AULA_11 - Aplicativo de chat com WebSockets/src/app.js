const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes/view.router.js');
const {Server} = require('socket.io');

const app = express();
const port = 8080;

const httpServer = app.listen(port, ()=>{`Servidor ouvindo na porta ${port}`});

const io = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.use('/', routes);
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

let messages = [];

io.on('connection', socket=>{
    socket.on('message', data=>{
        messages.push(data);
        io.emit('messageLogs', messages);
    });
});