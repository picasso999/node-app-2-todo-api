// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('unable to inert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //         name: 'Puranam Akshitha',
    //             age: 23,
    //             location: 'hyderabad'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to create Users log',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.close();
});

// MongoClient.connect('mongodb://localhost:27017/users',(err,db)=>{
//     if(err){
//         return console.log('Unable to connect MongoDB server with users ID');

//     }

//     console.log('connected to users mongoDB server');

//     db.collection('Users').insertOne({
//         name: 'Puranam Akshitha',
//         age: 23,
//         location: 'hyderabad'
//     },(err,result)=>{
//         if(err){
//             return console.log('Users unable to insert Users list', err);
//         }

//         console.log(JSON.stringify(result.ops,undefined,2));
//     })

//     db.close();
// });