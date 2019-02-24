var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

var port = process.env.PORT || 3000

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

//get route to show todos
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});


//setting up individual route for each todo ID
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo});
    },(e)=>{
        return res.status(400).send();
    });
});

app.delete('/todos/:id',(req, res)=>{
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo});
    },(e)=>{
        return res.status(400).send();
    });
});

app.listen(port,()=>{
    console.log(`Started up at port ${port}`);
});

module.exports = {app};



































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