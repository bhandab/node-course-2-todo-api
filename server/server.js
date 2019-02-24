var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//app.use takes the middleware; bodyParser, a third party middleware in this case 
app.use(bodyParser.json());

//express route [Sets up the route]
 app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});



































/*
var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,//sets up the min length for the string
        trim:true//removes leading or trailing whitespaces
    },
    completed:{
        type: Boolean,
        default:false
    },
    completedAt:{
        type: Number,
        default:null

    }
});

var User  = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1

    }
});

var nextTodo = new Todo({
    text:'Write nothing'
});

nextTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined,2));
},(err)=>{
    console.log('Unable to save',err);
});

var userOne = new User({
    email:'Bhandaribidhan7@gmail.com'
});

userOne.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    console.log("Cannot create user", err);
});*/