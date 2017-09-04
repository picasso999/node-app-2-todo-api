// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect MongoDB server');
    }

    // db.collection('Todos').find({
        
    //     completed: false,
    //     _id: new ObjectID('59a99ebb3906cc09e02f3e0b') 
    
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('something went wrong');
    // })

    // console.log('Connected to MongoDB server');

    db.collection('Todos').find({
        text: 'something to do'
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
       
    }, (err)=>{
        console.log('something went wrong');
    })

    console.log('Connected to MongoDB server');

    

    // db.close();
});