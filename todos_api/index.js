

var express = require('express'),
    app = express();
    port = process.env.PORT || 3000
    
    app.get('/', function(req, res){
        res.json({message: 'hello'});
    })

    app.get('/go', function(req, res){
        res.send("lets play two");
        console.log('hello');
    })

    app.listen(port, function(){
        console.log("APP RUNNING ON PORT " + port)
    });

