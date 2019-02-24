//const MongoClient = require('mongodb').MongoClient;
/*These two lines do the same thing. The line below is an instance of
destructuring*/
const{MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    },(err, result)=>{
        if (err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name:'Bidhan Bhandari',
        age:22,
        location:'507 Cole Ave'
    },(err,result)=>{
        if(err){
           return console.log('Unable to insert user',error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});