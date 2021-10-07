const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/tasks', require('./routes/tasks'))

//static files
app.use(express.static(__dirname + '/public'));

//server  is listinning


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});