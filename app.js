var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var handlebars = require('express-handlebars')

app.use(express.static(__dirname+'/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//ROUTES================================================================

app.get('/', function(req, res) { 
    res.render('home')
})

app.get('/mystory', function(req, res) { 
    res.render('mystory')
})

app.get('/apps', function(req, res) { 
    res.render('apps')
})

app.get('/apps/studylog', function(req, res) { 
    res.render('studylog')
})

app.get('/apps/tasklog', function(req, res) {
    res.render('tasklog')
})

app.get('/capabilities', function(req, res) {
    res.render('capabilities')
})

app.get('/connect', function(req, res) {
    res.render('connect')
})

//START SERVER================================================================

app.listen(9000, function(){
    console.log('Server listening on Port 9000...')
})