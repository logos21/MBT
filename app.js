const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Position = require('./routes/position');

app.listen(3000, function () {
    console.log('start');
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs')
app.use('/BusMap', Position);
//
// app.get('/BusMap', function (req,res) {
//     res.sendFile(__dirname + '/public/main.html');
// })
