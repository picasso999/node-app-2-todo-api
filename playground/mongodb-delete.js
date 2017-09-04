// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect MongoDB server');
    }


    console.log('Connected to MongoDB server');

    //deleteMany

    // db.collection('Todos').deleteMany({text: 'something to do 1'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({
    //     text: 'something to do 1'
    // }).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete


    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    //.....................................


    db.collection('Users').deleteOne({complete: false}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("59ad2d8f79967361c737b6f2")
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });

    // db.close();
});