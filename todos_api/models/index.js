var mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/todo-api');


//allows us to use .then and .catch 
mongoose.Promise = Promise; 