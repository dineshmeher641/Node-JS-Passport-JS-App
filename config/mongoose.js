const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0/nodejs_passpostjs_app')
.then(()=>{
    console.log('connect sucessfully ')
})
.catch(()=>{
    console.log('can not connect to mangodb  ')
 
})

const db=mongoose.connection;

module.exports=db;