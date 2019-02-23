const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //find() returns a mongodb cursor, toArray() returns a promise object
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c7180ddce2adf4858b4b836')
    //     //completed:true
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todo');
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
        
    },(err)=>{
        console.log('Unable to fetch todo');
    });
    //db.close();
});