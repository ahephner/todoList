

var express = require('express'),
    app = express();
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
    //connect to routes
var todoRoutes = require('./routes/todos');

//connect to bodyParser to Mongodb
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//tells express to use state page
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//root route
app.get('/', function(req, res){
        res.sendFile('index.html');
    })

//this is defining routes so it will be .com/api/todos then todoRoutes we define in routes
app.use('/api/todos', todoRoutes);

    app.listen(port, function(){
        console.log("APP RUNNING ON PORT " + port)
    });

