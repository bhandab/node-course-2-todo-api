const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:"eat lunch"}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete: It deletes the item and returns it
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({
        _id:new ObjectID('5c71a51a24d83548584f697a')
    }).then((result)=>{
        console.log(result.value);
    });
    //db.close();
});