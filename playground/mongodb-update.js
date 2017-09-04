// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect MongoDB server');
    }

    
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59a99fb466d56822f08cb2a3')
    },{ $set:{
        text: 'Very important way to update',
        completed: false
    }},{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59ad2d0379967361c737b698')
    },{
        $set: {
            name: 'Vicious Saint'
        }
    },{
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })



    

    // db.close();
});