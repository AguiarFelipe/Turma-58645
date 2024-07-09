const express = require('express');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const connectDB = require('./config/database.js');
const indexRoute = require('./routes/index.js');
const pessoasRoute = require('./routes/pessoas.js');

const app = express();

// Connect to database
connectDB();



// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.use(methodOverride('_method'));


app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));

// Routes
app.use('/', indexRoute);
app.use('/pessoas', pessoasRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
