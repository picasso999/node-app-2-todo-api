const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');

const {Todo}=require('./../server/models/todo.js');

const {User}=require('./../server/models/users');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('59bc0b04c7d3bc14d53d0135').then((todo)=>{
    console.log(todo);
})