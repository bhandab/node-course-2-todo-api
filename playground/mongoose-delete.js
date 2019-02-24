const{ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var userId = '5c71b82a9eead2a83cb5d24a'

//Todo.remove({}) removes all the documents from Todo
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove({})

Todo.findByIdAndRemove('idValueHere').then((todo)=>{
    console.log(todo);
})

