

var express = require('express'),
    app = express();
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
    //connect to routes
var todoRoutes = require('./routes/todos');

//connect to bodyParser to Mongodb
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
        res.send("Hello from the Root");
    })

//this is defining routes so it will be .com/api/todos then todoRoutes we define in routes
app.use('/api/todos', todoRoutes);

    app.listen(port, function(){
        console.log("APP RUNNING ON PORT " + port)
    });

