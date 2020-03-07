const express = require('express');
const expressLayout = require('express-ejs-layouts');
const {mongoose} = require('./database/database');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout')
//Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressLayout);
app.use(methodOverride('_method'));

// Use router
app.use('/', require('./routes/index'));
app.use('/authors', require('./routes/author'));
app.use('/books', require('./routes/book'));
app.use(express.static('public'));
// App listen port
app.listen(3000, () => {
    console.log('Is running...');
})