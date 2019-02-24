const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5c71b82a9eead2a83cb5d24a'

// var id  = '6c71b82a9eead2a83cb5d24911';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
    
//     if(!todo){//handles in case if is not valid and todo value is null
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
})
