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


//get older entered items by id created from mongo
router.get('/:todoId', function(req, res){
    //findById is to get the id of the item
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.put('/:todoId', function(req, res){
    //db Todo findOneAndUpdate will update item req.body is what will be the new data and {new: true} gives me the response
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo)
    })
    .catch(function(err){
        res.send(err);
    })
})

router.delete('/:todoId', function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "Item Deleted"});
    })
    .catch(function(err){
        res.send(err);
    })
})
module.exports = router; 