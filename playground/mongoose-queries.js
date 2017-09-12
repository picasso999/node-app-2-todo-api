const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');

const {Todo}=require('./../server/models/todo.js');

const {User}=require('./../server/models/users');

var id = '59ae44473f52869833423eb5';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
});

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// };


// // Todo.find({
// //     _id: id
// // }).then((todos)=>{
// //     console.log('Todos',todos);
// // });

// // Todo.findOne({
// //     _id:id
// // }).then((todo)=>{
// //     console.log('Todo',todo);
// // });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id',todo);
// }).catch((e)=>console.log(e));