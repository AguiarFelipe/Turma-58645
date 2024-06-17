const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', __dirname+'/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    let user = {
        name:"João",
        last_name:"Marcelo"
    }

    res.render('index', user);
})

app.listen(8080, ()=>{console.log("Servidor ouvindo na porta 8080")});