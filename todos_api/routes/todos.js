var express = require('express');

//allows us to breakout routes
var router = express.Router();
//requiring db models
var db = require('../models');

router.get('/', function(req, res){
  db.Todo.find()
  .then(function(todos){
      res.json(todos);
  })
  .catch(function(err){
      res.send(err);
  })
});

router.post('/', function(req, res){
    //database called Todo create a new req body which is an obj
    //mongodb adds created data and id #
    db.Todo.create(req.body)
    //.then run make a newTodo and turn it to response with json new todo
    .then(function(newTodo){
        res.json(newTodo);
    }).catch(function(err){
        res.send(err);
    })
});

module.exports = router; 