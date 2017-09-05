var express = require('express');

var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');

var {Todo} = require('./models/todo');

var {User}= require('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (err)=>{
        res.status(400).send(err);
    });

    // console.log(req.body);
});

app.listen(3000,()=>{
    console.log('started on port 3000');
});


// var newDoList = new Todo({
//     text: 'eat dinner'
// });

// newDoList.save().then((docs)=>{
//     console.log('saved newDoList', docs);
// },(err)=>{
//     console.log("unable to save the newDoList");
// });

// var ToDoN = new Todo({
//     text: '      Code more and spend more time understanding    '
// });


// ToDoN.save().then((doc)=>{
//     console.log('saved ToDoN info',doc);
// }, (err)=>{
//     console.log('unable to save ToDoN');
// });



// var user1 = new newUser({
//     name: 'Puranam Pradeep Picasso',
//     email: 'pichupicasso@gmail.com'
// });

// user1.save().then((doc)=>{
//     console.log('User name has been saved',doc);
// }, (err)=>{
//     console.log('Unable to save name', err);
// });

