var mongoose = require('mongoose');

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

module.exports = {Todo};