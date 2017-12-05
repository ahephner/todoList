

$(document).ready(function(){
    $.getJSON('http://localhost:3000/api/todos')
        .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })    

    //due to that the list class is on the page a load time we target
    //it for the click pass 'span' as what individual we are targeting on the class
    //common issue with single page due to when the span is added after page loaded
    $('.list').on('click', 'span', function(){
       removeTodo($(this).parent());
    })


});
   
function addTodos(todos){
    //add here
    todos.forEach(function(todo){
     addTodo(todo);
    })
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name  + '<span>X</span></li>')
    //this allows us to assign new data when the new li is made so we can reference it else where
    newTodo.data('id', todo._id );
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo)
}


function createTodo(){
//send new task
var userInput = $('#todoInput').val();
$.post('http://localhost:3000/api/todos', {name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var itemId = todo.data('id');
    var deleteURL = 'api/todos/' + itemId;

    $.ajax({
        method: "DELETE",
        url: deleteURL
    })
    .then(function(data){
        todo.remove();
    });
}